export type APIUserType = {
	id: number;
	name: string;
	image: string;
};

export type APIPublicationType = {
	id: number;
	userId: number;
	type: WorkspaceType;
	title: string;
	body: string;
};

export enum WorkspaceType {
	ClientContract = 0,
	SupplierContract,
	CorporateContract,
	GroupNorms,
	RealEstateContract,
}
