export function NewNoteCard(){
    return(
        <div className='bg-slate-700 rounded-md p-5 space-y-3 relative'>
        <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>
        <p className='text-sm leading-5 text-slate-400'>
          Grave uma nota em áudio que será convertida para texto automaticamente.
        </p>
        
      </div>
    )
}