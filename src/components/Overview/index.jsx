import iconUp from '../../images/icon-up.svg'
import iconDown from '../../images/icon-down.svg'
import iconFacebook from '../../images/icon-facebook.svg'
import iconInstagram from '../../images/icon-instagram.svg'
import iconTwitter from '../../images/icon-twitter.svg'
import iconYT from '../../images/icon-youtube.svg'

function Overview() {
  return (
    <section className='px-5  pb-8 font-inter max-w-[734px] 2xl:max-w-[1452px] flex flex-col mx-auto'>
      <h2 className='text-2xl font-bold text-grayish-blue dark:text-white mb-7 text-center md:text-left'>Overview - Today</h2>
      <div className='flex flex-wrap gap-6 justify-center lg:justify-start'>
        <MediaOverview overviewDescription="Page Views" mediaIcon={iconFacebook} result="87" iconArrow={iconUp}
          overviewStatus="text-lime-green" statusToday="3%" />
        <MediaOverview overviewDescription="Likes" mediaIcon={iconFacebook} result="52" iconArrow={iconDown}
          overviewStatus="text-bright-red" statusToday="2%" />
        <MediaOverview overviewDescription="Likes" mediaIcon={iconInstagram} result="5462" iconArrow={iconUp}
          overviewStatus="text-lime-green" statusToday="2257%" />
        <MediaOverview overviewDescription="Profile Views" mediaIcon={iconInstagram} result="52k" iconArrow={iconUp}
          overviewStatus="text-lime-green" statusToday="1375%" />
        <MediaOverview overviewDescription="Retweets" mediaIcon={iconTwitter} result="117" iconArrow={iconUp}
          overviewStatus="text-lime-green" statusToday="303%" />
        <MediaOverview overviewDescription="Likes" mediaIcon={iconTwitter} result="507" iconArrow={iconUp}
          overviewStatus="text-lime-green" statusToday="553%" />
        <MediaOverview overviewDescription="Likes" mediaIcon={iconYT} result="107" iconArrow={iconDown}
          overviewStatus="text-bright-red" statusToday="19%" />
        <MediaOverview overviewDescription="Total Views" mediaIcon={iconYT} result="1407" iconArrow={iconDown}
          overviewStatus="text-bright-red" statusToday="12%" />
      </div>
    </section>
  )
}

const MediaOverview = (props) => {
  return (
    <div className='w-full p-6 max-w-[335px] rounded-md bg-light-card dark:bg-dark-card font-inter transition-all duration-300
    hover:bg-[#e0e2e9] dark:hover:bg-[#2f3654] cursor-pointer'>
      <div className='flex justify-between items-center mb-6'>
        <span className='font-bold text-grayish-blue dark:text-desaturated-blue'>{props.overviewDescription}</span>
        <img src={props.mediaIcon} alt="icon" className='w-6 h-6' />
      </div>
      <div className='flex justify-between items-end'>
        <span className='font-bold text-4xl text-dark-blue dark:text-white'>{props.result}</span>
        <div className='flex items-center'>
          <img src={props.iconArrow} alt="icon" className='mr-2 w-[10px] ' />
          <span className={`font-bold ${props.overviewStatus}`}>{props.statusToday}</span>
        </div>
      </div>
    </div>
  )
}

export default Overview