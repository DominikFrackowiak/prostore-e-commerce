import { cn } from "@/lib/utils"

interface Props {
	value: number
	className?: string
}

export default function ProductPrice({ value, className="" }: Props) {
 // Ensure two decimal places
 const priceValueWithTwoDecimalPlaces = value.toFixed(2)

 // Get the int/float
const [intValue, floatValue] = priceValueWithTwoDecimalPlaces.split(".")


	return (
		<p className={cn('text-2xl', className)}>
			<span className='text-xs align-super'>$</span>
			<span className='text-md align-super'>{intValue}</span>
			<span className='text-xs align-super'>.{floatValue}</span>
		</p>
	)
}
