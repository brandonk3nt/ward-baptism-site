import LineItem from "@/components/LineItem";
import LineItemBold from "@/components/LineItemBold";
import ServicesFooter from "@/components/ServicesFooter";
import ServicesHeader from "@/components/ServicesHeader";
import LineItemLeadership from "@/components/LineItemLeadership";

export default function Page() {
  return (
    <div className="w-full h-full">
      <ServicesHeader heroImage="/img/jesus-baptism.jpg" />
      <div id="services" className="mx-2">
        <LineItemLeadership left="Presiding" right="Bishop Shumway" />
        <LineItemLeadership left="Conducting" right="Joe Capps" />
        <LineItemLeadership left="Pianist" right="Sherie Kent" />
        <LineItemLeadership left="Chorister" right="Valerie Heywood" />

        <div className="pt-4">
          <div className="flex font-thin justify-center font-sm truncate zero-auto max-75">* * *</div>
        </div>

        <LineItem left="Talk on Baptism" right="Jaxon Kent" />

        <LineItem left="Music Number" right="Rhodes' Brothers" />

        <LineItem left="Opening Song" right="Baptism" />

        <LineItem left="Opening Prayer" right="Lux Heywood" />

        <LineItemBold middle="Baptism" />

        <LineItem left="Talk on the Holy Ghost" right="Brixton Kent" />

        <LineItemBold middle="Confirmation" />

        <LineItem left="Closing Prayer" right="Graham Kent" />
      </div>
      <ServicesFooter />
    </div>
  );
}
