"use client";

export default function AuthLayout({ children }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      {children}
    </div>
  );
}
