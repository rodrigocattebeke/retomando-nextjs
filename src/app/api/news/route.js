import { NextResponse } from "next/server";

const route = "https://newsdata.io/api/1/latest? apikey=pub_9378aab4ec2a4f30ad41fb7396561b12&country=py,ar,us,br,cl&language=es&image=1";

export async function GET() {
  try {
    const res = await fetch(route);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error: error,
    });
  }
}
