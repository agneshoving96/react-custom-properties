import React = require("react");

export interface ThemeProperties {
	[key: string]: string;
}

export interface CustomPropertiesProps {
	global: boolean;
	properties: ThemeProperties;
}

export default class CustomProperties extends React.Component<CustomPropertiesProps, {}> {}
