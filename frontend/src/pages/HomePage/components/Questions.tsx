import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button, Heading } from '~/components/shared'
import accordions from '~/constants/accordions'

const Questions = () => {
  return (
    <section className="flex flex-col gap-10 py-10 lg:gap-20 lg:py-20 xl:gap-40">
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <Heading
          title="Frequently Asked Questions"
          subTitle="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        />
        <Button>Ask a Question</Button>
      </div>
      <Accordion
        type="single"
        collapsible
        className="grid w-full grid-cols-1 items-center gap-x-20 gap-y-2 text-white lg:grid-cols-2"
      >
        {accordions.map((accordion) => (
          <div className="py-4" key={accordion.id}>
            <AccordionItem value={accordion.id} className="border-grey-60">
              <div className="flex items-center gap-2 pb-3 md:gap-5 ">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black-12 text-base font-semibold lg:h-16 lg:w-16 lg:text-xl">
                  {accordion.id}
                </div>
                <div className="flex-1">
                  <AccordionTrigger className="text-lg font-medium leading-8 lg:text-2xl">
                    {accordion.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-normal leading-7 text-grey-60 lg:text-lg">
                    {accordion.answer}
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </section>
  )
}

export default Questions
