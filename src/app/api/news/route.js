import { NextResponse } from "next/server";

const TRANSFORMED_URL = "https://newsdata.io/api/1/latest? apikey=pub_9378aab4ec2a4f30ad41fb7396561b12&country=py,ar,us,br,cl&language=es&image=1";

const BASE_URL = "https://newsdata.io/api/1/latest? apikey=pub_9378aab4ec2a4f30ad41fb7396561b12";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");
    const page = Number(searchParams.get("page")) || 1;

    let url;

    // 🔹 Noticia individual
    if (id) {
      url = `${BASE_URL}&id=${id}`;
    }
    // 🔹 Listado paginado
    else {
      url = `${TRANSFORMED_URL}&page=${page}`;
    }

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Error al obtener noticias");
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
