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
	image: string;
};

export enum WorkspaceType {
	ClientContract = 0,
	SupplierContract,
	CorporateContract,
	GroupNorms,
	RealEstateContract,
}

export enum ViewType {
	Grid,
	List,
}

export enum SortDir {
	AZ = 0,
	ZA = 1,
}
