'use client';

import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Separator } from './ui/separator';
import { Icons } from './icons';

import { cn } from '@/lib/utils';

type PropDef = {
  name: string;
  required?: boolean;
  default?: string | boolean;
  type: string;
  description?: string;
};

export function APIList({
  type = 'function',
  description,
  data,
}: {
  type?: string;
  description?: string;
  data: PropDef[];
}) {
  const [values, setValues] = useState(data.map((item) => item.name));

  return (
    <section className="flex w-full flex-col items-center">
      <div className="w-full pb-16">
        {/* <div> */}
        {/*  <h1 */}
        {/*    className="scroll-mt-[60px] font-mono text-2xl font-semibold" */}
        {/*    id={name} */}
        {/*  > */}
        {/*    <a */}
        {/*      href={`#${name}`} */}
        {/*      className={cn( */}
        {/*        'opacity-0 hover:opacity-100 group-hover:opacity-100' */}
        {/*      )} */}
        {/*      onClick={(e) => e.stopPropagation()} */}
        {/*    > */}
        {/*      <div className="absolute -left-5 top-2 pr-1"> */}
        {/*        <Icons.pragma className="h-4 w-4 text-muted-foreground" /> */}
        {/*      </div> */}
        {/*    </a> */}

        {/*    <Code>{name}</Code> */}
        {/*  </h1> */}
        {/* </div> */}
        {!!description && <p className="mt-10">{description}</p>}

        <div className="mt-10 pb-3 ">
          <div className="mt-5 flex items-center justify-between pb-4">
            <h3 className="text-lg font-medium leading-none tracking-tight">
              {type === 'function' && <span>Parameters</span>}
              {type === 'object' && <span>Attributes</span>}
            </h3>
            <div
              className="cursor-pointer select-none text-sm text-muted-foreground"
              onClick={() =>
                values.length === data.length
                  ? setValues([])
                  : setValues(data.map((item) => item.name))
              }
            >
              {values.length === data.length ? 'Collapse all' : 'Expand all'}
            </div>
          </div>

          <ul className="m-0 list-none p-0">
            <Separator />

            <Accordion
              type="multiple"
              value={values}
              onValueChange={setValues}
              className="w-full"
            >
              {data.map((item, i) => (
                <AccordionItem key={`${item.name}-${i}`} value={item.name}>
                  <AccordionTrigger className="group">
                    <li id={item.name} className="scroll-mt-[56px]">
                      <h4 className="relative flex items-end py-2 font-semibold leading-none tracking-tight">
                        <a
                          href={`#${item.name}`}
                          className={cn(
                            'opacity-0 hover:opacity-100 group-hover:opacity-100'
                          )}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="absolute -left-5 top-2 pr-1">
                            <Icons.pragma className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </a>
                        <span className="mr-2 font-mono font-semibold leading-none">
                          {item.name}
                        </span>
                        <span className="mr-2 font-mono text-sm font-medium leading-none text-muted-foreground">
                          {item.type}
                        </span>
                      </h4>
                    </li>
                  </AccordionTrigger>
                  <AccordionContent>{item.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ul>
        </div>
      </div>
    </section>
  );
}

// {data.map(
//   (
//     {
//       name,
//       type,
//       required,
//       default: defaultValue,
//       description,
//     },
//     i
//   ) => (
//     <tr key={`${name}-${i}`}>
//       <Box
//         as="td"
//         css={{
//           borderBottom: '1px solid $gray6',
//           py: '$3',
//           pr: '$4',
//           whiteSpace: 'nowrap',
//         }}
//       >
//         <Code>
//           {name}
//           {required ? '*' : null}
//         </Code>
//         {description && (
//           <Popover>
//             <PopoverTrigger asChild>
//               <IconButton
//                 variant="ghost"
//                 css={{
//                   ml: '$1',
//                   verticalAlign: 'middle',
//                   color: '$gray11',
//                 }}
//               >
//                 <AccessibleIcon label="Prop description">
//                   <InfoCircledIcon />
//                 </AccessibleIcon>
//               </IconButton>
//             </PopoverTrigger>
//             <PopoverContent
//               side="top"
//               onOpenAutoFocus={(event) => {
//                 event.preventDefault();
//                 (event.currentTarget as HTMLElement)?.focus();
//               }}
//             >
//               <Box css={{ py: '$2', px: '$3' }}>
//                 <Text size="2" css={{ lineHeight: '20px' }}>
//                   {description}
//                 </Text>
//               </Box>
//             </PopoverContent>
//           </Popover>
//         )}
//       </Box>
//       <Box
//         as="td"
//         css={{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4' }}
//       >
//         <Code css={{ bc: '$gray4', color: '$gray11' }}>
//           {type || type}
//         </Code>
//         {Boolean(type) && (
//           <Popover>
//             <PopoverTrigger asChild>
//               <IconButton
//                 variant="ghost"
//                 css={{
//                   ml: '$1',
//                   verticalAlign: 'middle',
//                   color: '$gray11',
//                   display: 'none',
//                   '@bp1': { display: 'inline-flex' },
//                 }}
//               >
//                 <AccessibleIcon label="See full type">
//                   <InfoCircledIcon />
//                 </AccessibleIcon>
//               </IconButton>
//             </PopoverTrigger>
//             <PopoverContent
//               side="top"
//               css={{ maxWidth: 'max-content' }}
//             >
//               <Box css={{ py: '$2', px: '$2', whiteSpace: 'nowrap' }}>
//                 <Code>{type}</Code>
//               </Box>
//             </PopoverContent>
//           </Popover>
//         )}
//       </Box>
//       <Box
//         as="td"
//         css={{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4' }}
//       >
//         {defaultValue ? (
//           <Code css={{ bc: '$gray4', color: '$gray11' }}>
//             {defaultValue}
//           </Code>
//         ) : (
//           <Box
//             as={AccessibleIcon}
//             label="No default value"
//             css={{ color: '$gray8' }}
//           >
//             <DividerHorizontalIcon />
//           </Box>
//         )}
//       </Box>
//     </tr>
//   )
// )}
// </tbody>
