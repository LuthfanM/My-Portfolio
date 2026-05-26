import EchoFlowDataDeletionPage from "@/components/data-delete/EchoFlowDataDeletion";

export default async function Page({ params }) {
  const { slug } = await params;

  const determineRenderedComponent = () => {
    switch (slug) {
      case "echo-flow":
        return <EchoFlowDataDeletionPage />;
      default:
        return <p>Data deletion page not found.</p>;
    }
  };

  return determineRenderedComponent();
}
