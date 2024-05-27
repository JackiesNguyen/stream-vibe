import { Button, Heading } from '~/components'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/Accordion'
import accordions from '~/constants/accordions'

const Questions = () => {
  return (
    <section className="flex flex-col gap-40 py-20">
      <div className="flex items-center justify-between">
        <Heading
          content="Frequently Asked Questions"
          subContent="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        />
        <Button>Ask a Question</Button>
      </div>
      <Accordion
        type="single"
        collapsible
        className="grid w-full grid-cols-2 items-center gap-x-20 gap-y-2 text-white "
      >
        {accordions.map((accordion) => (
          <div className="p-8" key={accordion.id}>
            <AccordionItem value={accordion.id} className="border-grey-60">
              <div className="flex gap-5 pb-3">
                <div className="h-16 w-16 rounded-xl bg-black-12 p-5 text-xl font-semibold">{accordion.id}</div>
                <div className="flex-1">
                  <AccordionTrigger className="text-2xl font-medium leading-8">{accordion.question}</AccordionTrigger>
                  <AccordionContent className="text-lg font-normal leading-7 text-grey-60">
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
