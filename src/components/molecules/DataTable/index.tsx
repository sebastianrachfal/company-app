import cx from 'classnames';
import EditableLine from '../EditableLine';

export default function DataTable({
	headings,
	data,
	className,
	auto,
	name,
}: {
	headings: string[];
	data: string[][];
	name: string;
	className?: string;
	auto?: boolean;
}) {
	return (
		<div className={cx('py-2 overflow-scroll', className)}>
			<table
				className={cx('w-full mt-4', {
					'table-fixed': !auto,
					'table-auto': auto,
				})}
			>
				<thead>
					<tr className='pb-2 border-b border-gray-200'>
						{headings.map((heading) => (
							<th
								key={`${name}-${heading}`}
								className='w-1/6 pb-2 text-sm text-left text-gray-800 truncate'
							>
								{heading}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((items, row) => (
						<tr key={`${name}-${row}`}>
							{items.map((item, col) => (
								<td
									key={`${name}-${row}-${col}`}
									className='pr-1 truncate'
								>
									{item.length ? (
										<EditableLine.Span
											name={name}
											ids={[row, col]}
										/>
									) : null}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
