import { query } from "@/libs/database";

export async function GET(request: Request) {}

export async function POST(request: Request) {
  const body = await request.json();
  const { name } = body;

  const isBooking = (await query(
    "SELECT * FROM customer WHERE customer_name = ? AND customer_is_success = ? ORDER BY customer_id DESC",
    [name, 0]
  )) as Array<any>;

  if (isBooking.length > 0) {
    return new Response(
      JSON.stringify({ message: "You have already checked in" }),
      { status: 400 }
    );
  }

  const result = (await query(
    "INSERT INTO `customer` (`customer_name`) VALUES (?);",
    [name]
  )) as any;

  const id = result.insertId;

  const data = await query(
    "SELECT * FROM `customer` WHERE customer_id = ? LIMIT 1",
    [id]
  );

  return new Response(JSON.stringify(data), { status: 201 });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { name, id } = body;

  await query(
    "UPDATE `customer` SET `customer_time_out` = ?, `customer_is_success` = '1' WHERE `customer_id` = ? AND `customer_name` = ?",
    [new Date(), id, name]
  );

  const data = await query(
    "SELECT * FROM `customer` WHERE customer_id = ? LIMIT 1",
    [id]
  );

  return new Response(JSON.stringify(data), { status: 200 });
}
