
import {redirect} from "next/navigation";

export { metadata } from "@/helpers/constants/privacy-policy-page-constants";

export default function PrivacyPolicyIndexPage() {
  redirect("/privacy-policy/echo-flow");
}
