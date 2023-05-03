import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import React from "react";

type Props = {
    children: React.ReactNode
    job: {
      id: number
      institution: string
      title: string
      period: string
      duties: {
        id: number
        duty: string
      }[]
    }
  }
export default function AccordianTrigger(props: Props) {
    const { children, job } = props
    const toggleOpen = React.useCallback(() => {
        setOpen((open) => !open)
      }, [])
    const [open, setOpen] = React.useState(false);

    return (
        <div className='flex flex-col rounded-md bg-white/5 '>
          <div className='flex flex-row justify-between items-center text-xs'>
            <p className='italic flex flex-shrink text-[10px] px-1'>{job.title}</p>
    
            <div className="flex flex-row items-center">
            <div className='flex text-black/50 dark:text-white/50 flex-shrink-0 '>
              {job.period}
            </div>
            <div className='flex flex-col items-center justify-center pl-4'>
              <button
                type='button'
                onClick={toggleOpen}
                aria-label='Search database'
                className='rounded-md p-2 text-teal-400 transition-all duration-300 hover:backdrop-blur-sm'
              >
                {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </button>
            </div>
            </div>
          </div>
            {open && (
              <div
                key={job.id}
               
              >
                <div className='flex flex-col items-stretch'>{children}</div>
              </div>
            )}
        </div>
      )
}