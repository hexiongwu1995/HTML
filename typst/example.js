import rehypeTypst from '@myriaddreamin/rehype-typst'
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'
import {read, write} from 'to-vfile'
import {unified} from 'unified'

const file = await unified()
  .use(rehypeParse, {fragment: true})
  .use(rehypeTypst)
  .use(rehypeStringify)
  .process(await read('input.html'))

file.basename = 'output.html'
await write(file)