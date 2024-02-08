export function NoteCard(){
    return(
        <button className='bg-slate-800 text-left rounded-md p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-500 focus-visible:ring-2 focus-visible:ring-lime-300'>
        <span className='text-sm font-medium text-slate-200'>Há 2 dias</span>
        <p className='text-sm leading-5 text-slate-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reiciendis minima harum, ab perferendis porro voluptates quisquam corrupti aperiam amet sapiente nulla nesciunt perspiciatis tempore voluptatum nisi totam quia. Nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reiciendis minima harum, ab perferendis porro voluptates quisquam corrupti aperiam amet sapiente nulla nesciunt perspiciatis tempore voluptatum nisi totam quia. Nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reiciendis minima harum, ab perferendis porro voluptates quisquam corrupti aperiam amet sapiente nulla nesciunt perspiciatis tempore voluptatum nisi totam quia. Nam.
        </p>
        <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-non' />
      </button>
    )
}