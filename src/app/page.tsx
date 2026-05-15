import LineItem from "@/components/LineItem";
import LineItemLeadership from "@/components/LineItemLeadership";
import LineItemBold from "@/components/LineItemBold";
import ServicesFooter from "@/components/ServicesFooter";
import ServicesHeader from "@/components/ServicesHeader";

export default function Page() {
  return (
    <div className="w-full h-full">
      <ServicesHeader heroImage="/img/jesus-baptism.jpg" />
      <div id="services" className="mx-2">
        <LineItemLeadership left="Presiding" right="Bishop Shumway" />
        <LineItemLeadership left="Conducting" right="Bishop Shumway" />
        <LineItemLeadership left="Organist" right="Melody Williams" />
        <LineItemLeadership left="Chorister" right="Elizabeth Kasl" />

        <LineItem
          left="Opening Hymn"
          middle="The Spirit of God"
          right="2"
          link="https://www.churchofjesuschrist.org/media/music/songs/the-spirit-of-god?lang=eng"
        />
        <LineItem left="Invocation" right="By Invitation" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="O God, The Eternal Father"
          right="175"
          link="https://www.churchofjesuschrist.org/media/music/songs/o-god-the-eternal-father?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        <LineItemBold middle="Bearing of Testimonies" />

        {/*
        <LineItem
          left="Special Musical Number"
          middle="Gethsemane"
          right="Primary, Ward Choir"
        />

        <LineItem left="Speaker" right="Chris Cooley" />

        <LineItem
          left="Special Musical Number"
          middle="There is a Green Hill Far Away, This is the Christ"
          right="Ward Choir"
        />

        <LineItem left="Speaker" right="Shaeli Kersee" />
        */}

        <LineItem
          left="Closing Hymn"
          middle="I Know That My Redeemer Lives"
          right="136"
          link="https://www.churchofjesuschrist.org/media/music/songs/i-know-that-my-redeemer-lives?lang=eng"
        />

        <LineItem left="Benediction" right="By Invitation" />
      </div>
      <ServicesFooter />
    </div>
  );
}
