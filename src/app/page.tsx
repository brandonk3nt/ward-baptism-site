import LineItem from "@/components/LineItem";
import LineItemBold from "@/components/LineItemBold";
import ServicesFooter from "@/components/ServicesFooter";
import ServicesHeader from "@/components/ServicesHeader";

export default function Page() {
  return (
    <div className="w-full h-full">
      <ServicesHeader heroImage="/img/jesus-baptism.jpg" />
      <div id="services" className="mx-2">

        <LineItem left="Opening Song" right="Baptism" />
        <LineItem left="Opening Prayer" right="Lux Heywood" />

        <LineItemBold middle="Baptism" />

        <LineItemBold middle="Confirmation" />

        <LineItem left="Talk on Baptism" right="Chris Cooley" />
        <LineItem left="Talk on the Holy Ghost" right="Chris Cooley" />
        <LineItem left="Music Number" right="Rhodes' Brothers" />

        <LineItem left="Closing Prayer" right="Graham Kent" />
      </div>
      <ServicesFooter />
    </div>
  );
}
