import { PrivacyLayout } from "@/components/layout/PrivacyLayout";
import {
  privacyPolicyMap,
  privacyPolicyMenus,
} from "@/app/data/privacyPolicyMenus";
import EchoFlowPolicy from "@/components/policy/EchoFlowPolicy";

export const metadata = {
  title: "Privacy Policy | M Luthfan Mursyidan",
  description: "Privacy policy for M Luthfan Mursyidan portfolio website.",
};

export default async function PrivacyPolicyPage({ params }) {
  const { slug } = await params;
    console.log("slug", slug);
  const policy = privacyPolicyMap[slug];

  return (
    <PrivacyLayout sections={privacyPolicyMenus} activeLabel={policy.label}>
      {slug === "echo-flow" && <EchoFlowPolicy />}
    </PrivacyLayout>
  );
}
