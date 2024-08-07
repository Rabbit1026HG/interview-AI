"use client";

export default function RootLayout({ children }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      {children}
    </div>
  );
}
