export type IpResponse = {
	status: string;
	country: string | null;
	countryCode: string | null;
	region: string | null;
	regionName: string | null;
	city: string | null;
	zip: string | null;
	lat: number | null;
	lon: number | null;
	timezone: string | null;
	isp: string | null;
	org: string | null;
	as: string | null;
	query: string | null;
};

// export type Ip = Omit<IpResponse, 'status'>;

// export type IpListItem = Pick<Ip, 'query' | 'country' | 'region'>;
