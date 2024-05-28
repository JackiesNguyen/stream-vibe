import { Button } from '~/components'

const Advertisement = () => {
  return (
    <section className="w-full py-10 xl:py-20">
      <div className="relative flex h-[350px] w-full max-w-full items-center overflow-hidden rounded-xl border border-black-10 bg-advertisement bg-contain px-3 md:px-20">
        <div className="flex flex-1 flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="flex flex-col gap-5 lg:gap-4">
            <h2 className="text-5xl font-bold text-white">Start your free trial today!</h2>
            <span className="text-lg font-normal text-grey-60">
              This is a clear and concise call to action that encourages users to sign up for a free trial of
              StreamVibe.
            </span>
          </div>
          <Button>Start a Free Trail</Button>
        </div>
      </div>
    </section>
  )
}

export default Advertisement
