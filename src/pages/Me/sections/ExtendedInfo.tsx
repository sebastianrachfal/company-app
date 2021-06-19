import SubsectionHeader from 'components/atoms/SubsectionHeader';
import EditableLine from 'components/molecules/EditableLine';
import SectionWrapper from 'components/molecules/SectionWrapper';

export default function ExtendedInfo() {
	return (
		<SectionWrapper>
			<div className='flex flex-col'>
				<SubsectionHeader>Expertise</SubsectionHeader>
				<EditableLine.Multi name='expertise' />

				<SubsectionHeader>Specialities</SubsectionHeader>
				<EditableLine.Multi name='specialities' />

				<SubsectionHeader>Admission to practice law</SubsectionHeader>
				<EditableLine.Multi name='admission' />

				<SubsectionHeader>Countries</SubsectionHeader>
				<EditableLine.Multi name='countries' />
			</div>
		</SectionWrapper>
	);
}
