import { ReactChild, useRef, useState } from 'react';
import cx from 'classnames';
import { EditableContext } from '../SectionWrapper';
import { useSelector } from 'react-redux';
import { setUserData, userDataSelector } from 'redux/slices/user';
import { useEffect } from 'react';
import { useAppDispatch } from 'redux/store';

interface EditableLineProps {
	name: string;
	ids?: number[];
	printFunction?: (text: string) => ReactChild;
	className?: string;
}

function EditableLine({
	printFunction,
	className,
	ids,
	name,
}: EditableLineProps) {
	const dispatch = useAppDispatch();

	const inputRef = useRef<HTMLInputElement>();
	const [currentText, setCurrentText] = useState('');

	const storeValue = useSelector(userDataSelector(name, ids));

	useEffect(() => {
		setCurrentText(storeValue);
	}, [storeValue]);

	return (
		<EditableContext.Consumer>
			{(value) => {
				const inputText = inputRef.current?.value;
				if (inputText?.length)
					setTimeout(() => {
						setCurrentText(inputText);
						dispatch(
							setUserData({ key: name, value: inputText, ids })
						);
					}, 0);

				return value ? (
					<input
						placeholder={currentText}
						ref={(ref) => (inputRef.current = ref || undefined)}
						className={cx(
							'px-1 border border-gray-200 text-sm',
							className
						)}
					/>
				) : (
					printFunction?.(currentText) || null
				);
			}}
		</EditableContext.Consumer>
	);
}

EditableLine.Span = ({ className, name, ids }: EditableLineProps) => (
	<EditableLine
		printFunction={(text) => (
			<span
				className={cx(
					'select-none text-[15px] text-gray-700',
					className
				)}
			>
				{text}
			</span>
		)}
		{...{ className, name, ids }}
	/>
);

EditableLine.Multi = ({ className, name, ids }: EditableLineProps) => (
	<EditableLine
		printFunction={(text) => (
			<div className='flex flex-wrap space-x-2'>
				{text.split(';').map((value, index) => (
					<span
						key={`${name}-span-${index}`}
						className='px-2 py-1 text-sm text-blue-600 bg-blue-200 rounded-md'
					>
						{value}
					</span>
				))}
			</div>
		)}
		{...{ className, name, ids }}
	/>
);

export default EditableLine;
