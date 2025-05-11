import { getLongURL } from "../../../utils/api";
// import { redirect } from "next/dist/server/api-utils";
import { redirect } from "next/navigation";

export default async function RedirectPage({
  params,
}: {
  params: { short_code: string };
}) {
  try {
    const result = await getLongURL(params.short_code);
    redirect(result.long_url);
  } catch (error) {
    return (
      <h1 className="text-center text-red-500 mt-10">
        404 - Short URL Not Found
      </h1>
    );
  }
}
