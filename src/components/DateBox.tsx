import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface DateBoxProps {
	dateString: string;
	isSimple?: boolean
}

export default function DateBox({dateString, isSimple}: DateBoxProps) {
	const fullDate = format(new Date(dateString), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
	const day = format(new Date(dateString), 'dd');
	const month = format(new Date(dateString), 'MMMM', { locale: ptBR });
	console.log("isSimple", isSimple);
	

	return (
		isSimple ? (
			<div className="flex flex-col  text-lime-400 rounded-md shrink-0">
				<span className="text-xl font-bold leading-none mb-3">{fullDate}</span>
			</div>
		): (
			<div className="flex flex-col items-center justify-center text-lime-400 rounded-md w-16 shrink-0">
				<span className="text-7xl font-bold leading-none mb-3">{day}</span>
				<span className="text-sm leading-none">{month.toLocaleUpperCase()}</span>
			</div>
		)
	)
}