
import {redirect} from "next/navigation";

export const metadata = {
  title: "Privacy Policy | M Luthfan Mursyidan",
  description: "Privacy policy for M Luthfan Mursyidan portfolio website.",
};

export default function PrivacyPolicyIndexPage() {
  redirect("/privacy-policy/echo-flow");
}
