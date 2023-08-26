import { cn } from '@/utils/cn'

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-neutral-200', className)}
      {...props}
    />
  )
}

export default Skeleton
