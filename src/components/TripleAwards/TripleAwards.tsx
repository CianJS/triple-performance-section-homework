import { ReactElement } from 'react'

import './TripleAwards.scss'
import TripleImage from '../../assets/triple2x.png'
import AutoCounter from '../AutoCounter/AutoCounter'

const TripleAwards = (): ReactElement => {
  const awardContentsData = [
    { count: 700, unit: '만 명', describe: '의 여행자' },
    { count: 100, unit: '만 개', describe: '의 여행 리뷰' },
    { count: 470, unit: '만 개', describe: '의 여행 일정' },
  ]

  const awardContents = () => {
    return awardContentsData.map((data, index) => (
      <div key={index} className="triple-award-contents-item">
        <AutoCounter maxCount={data.count} description={data.unit} isStrong />
        {data.describe}
      </div>
    ))
  }

  return (
    <section id="triple-awards-section">
      <div className="triple-award-image-wrapper">
        <img className="triple-award-image" src={TripleImage} alt="트리플" />
        <span className="triple-award-description">2021년 12월 기준</span>
      </div>
      <div className="triple-award-detail-wrapper">
        <div className="triple-award-contents">{awardContents()}</div>
        <div className="triple-store-awards">
          <p className="triple-store-awards-item google-award">
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </p>
          <p className="triple-store-awards-item apple-award">
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </p>
        </div>
      </div>
    </section>
  )
}

export default TripleAwards
