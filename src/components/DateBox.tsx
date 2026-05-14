import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface DateBoxProps {
	dateString: string;
}

export default function DateBox({dateString}: DateBoxProps) {
	const day = format(new Date(dateString), 'dd');
	const month = format(new Date(dateString), 'MMMM', { locale: ptBR });

	return (
		<div className="flex flex-col items-center justify-center text-lime-400 p-2 rounded-md w-16 h-16 shrink-0">
			<span className="text-7xl font-bold leading-none mb-3">{day}</span>
			<span className="text-sm leading-none">{month.toLocaleUpperCase()}</span>
		</div>
	)
}