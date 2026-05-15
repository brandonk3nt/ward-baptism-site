import LineItem from "@/components/LineItem";
import LineItemLeadership from "@/components/LineItemLeadership";
import LineItemBold from "@/components/LineItemBold";
import ServicesFooter from "@/components/ServicesFooter";
import ServicesHeader from "@/components/ServicesHeader";

export default function Page() {
  return (
    <div className="w-full h-full">
      <ServicesHeader heroImage="/img/christ-resurrected.jpg" />
      <div id="services" className="mx-2">
        <LineItemLeadership left="Presiding" right="Bishop Shumway" />
        <LineItemLeadership left="Conducting" right="Bishop Shumway" />
        <LineItemLeadership left="Organist" right="Melody Williams" />
        <LineItemLeadership left="Chorister" right="Elizabeth Kasl" />

        <div className="p-8 my-4 rounded bg-sky-100">
          <div className="text-center">
            <em className="font-semibold text-lg">Announcements</em>
          </div>
          <ol className="list-decimal ml-5 sticky">
            <li className="pt-1">
              The Dana Ranch Ward is responsible for cleaning the building
              beginning March 7th through the end of May. The cleaning schedule
              is included in the weekly e-mail.
            </li>
            <li className="pt-1">
              Missionary Meal Signup. (
              <a
                href="https://www.signupgenius.com/go/10C0F4FADAE2DA7F5CE9-57457318-missionary#/"
                className="text-sky-600 hover:text-sky-800 underline break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up here
              </a>
              )
            </li>
            <li className="pt-1">
              Bishop&apos;s Hang Out: Cereal Sunday. All priests and young women
              class 16-18 are invited to the Shumway&apos;s home on the third
              Sunday of each month from 7:00-8:30 pm.
            </li>
            <li className="pt-1">
              Mission and Life Skills Prep for all Juniors and Seniors is held
              every 2nd and 4th Sunday at 3pm in the Relief Society room.
            </li>
          </ol>
        </div>

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
