import { createFileRoute } from "@tanstack/react-router";

const notReady = () =>
  new Response(JSON.stringify({ ok: false, message: "Integration not activated yet." }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });

export const Route = createFileRoute("/api/payment/qpay/$action")({
  server: {
    handlers: {
      GET: notReady,
      POST: notReady,
    },
  },
});
