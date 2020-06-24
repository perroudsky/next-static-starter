import Layout from "../components/Layout/Layout";
import useResponsive from "../hooks/useResponsive";

const Index = () => {
  const { isMobile } = useResponsive();
  return (
    <Layout title="Home">
      <div className="layout-full-padding ">
        <code>hello world - {isMobile ? "on Mobile" : "on Desktop"}</code>
      </div>
    </Layout>
  );
};

export default Index;
