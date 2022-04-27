import { renderToString } from "react-dom/server";
import type { EntryContext } from "remix";
import { createCookie, RemixServer } from "remix";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const url = new URL(request.url);
  const cookie = createCookie("pabio_v20220123_locale", {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
  });

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set(
    "Set-Cookie",
    await cookie.serialize(url.pathname.split("/")[1])
  );

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
