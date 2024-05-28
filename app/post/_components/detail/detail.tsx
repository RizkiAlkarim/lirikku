import DetailHeader from './detail-header'
import DetailNote from './detail-note'
import DetailLanguage from './detail-language'
import DetailFont from './detail-font'
import DetailInfo from './detail-info'
import DetailAudio from './detail-audio'

export default function Detail() {
  return (
    <div className='flex flex-col gap-8 w-2/6 h-full  p-3'>
        <DetailHeader />
        <DetailNote />
        <DetailLanguage />
        <DetailFont />
        <DetailInfo />
        <DetailAudio />
    </div>
  )
}
