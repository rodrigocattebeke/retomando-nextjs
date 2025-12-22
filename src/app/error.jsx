"use client";
export default function Error({ error, reset }) {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 vw-100">
      <p>ocurrio un error</p>
      <small>{error.message}</small>
    </div>
  );
}
