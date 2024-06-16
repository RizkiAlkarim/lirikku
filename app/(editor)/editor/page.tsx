import Editor from './_components/editor'
import Detail from './_components/post-info'

export default function Page() {
  return (
    <div className='flex justify-center'>
      <Editor />
      <Detail />
    </div>
  )
}
