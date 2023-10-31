import iconUp from "../../images/icon-up.svg";
import iconDown from "../../images/icon-down.svg";
import iconFacebook from "../../images/icon-facebook.svg";
import iconInstagram from "../../images/icon-instagram.svg";
import iconTwitter from "../../images/icon-twitter.svg";
import iconYT from "../../images/icon-youtube.svg";

function SocialMedia() {
  return (
    <section className="px-5 lg:px-0 -translate-y-[50px] flex flex-wrap gap-6 justify-center  2xl:max-w-[1452px] mx-auto">
      <Media
        topCardColor="bg-[#198ff5]"
        mediaIcon={iconFacebook}
        userName="@nathanf"
        followers="1987"
        followersDescription="FOLLOWERS"
        iconArrow={iconUp}
        followersToday="12"
        followersStatus="text-lime-green "
      />
      <Media
        topCardColor="bg-[#1ca0f2]"
        mediaIcon={iconTwitter}
        userName="@nathanf"
        followers="1044"
        followersDescription="FOLLOWERS"
        iconArrow={iconUp}
        followersToday="99"
        followersStatus="text-lime-green "
      />
      <Media
        topCardColor="bg-instagram-gradient"
        mediaIcon={iconInstagram}
        userName="@realnathanf"
        followers="11K"
        followersDescription="FOLLOWERS"
        iconArrow={iconUp}
        followersToday="1099"
        followersStatus="text-lime-green "
      />
      <Media
        topCardColor="bg-[#c4032a]"
        mediaIcon={iconYT}
        userName="@Nathan F."
        followers="8239"
        followersDescription="SUBSCRIBERS"
        iconArrow={iconDown}
        followersToday="144"
        followersStatus="text-bright-red"
      />
    </section>
  );
}

const Media = (props) => {
  return (
    <div
      className="w-full max-w-[280px] overflow-hidden rounded-md bg-light-card dark:bg-dark-card font-inter transition-all duration-300
     hover:bg-[#e0e2e9] dark:hover:bg-[#2f3654] cursor-pointer"
    >
      <div className={`w-full h-1 ${props.topCardColor}`}></div>
      <div className="flex flex-col justify-center items-center py-7 ">
        <p className="flex items-center font-bold text-grayish-blue dark:text-desaturated-blue">
          <img src={props.mediaIcon} alt="icon" className="mr-2 w-6 h-6" />
          <span>{props.userName}</span>
        </p>
        <div className="text-center my-6">
          <p className="font-bold text-6xl text-very-dark-blue dark:text-white">
            {props.followers}
          </p>
          <p className="tracking-[5px] text-grayish-blue dark:text-desaturated-blue mt-1">
            {props.followersDescription}
          </p>
        </div>
        <p className="flex items-center">
          <img src={props.iconArrow} alt="icon" className="mr-2 w-[10px] " />
          <span className={`font-bold ${props.followersStatus}`}>
            {props.followersToday} Today
          </span>
        </p>
      </div>
    </div>
  );
};

export default SocialMedia;
