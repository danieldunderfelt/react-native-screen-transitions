import { useNavigation } from "@react-navigation/native";
import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { mainExampleGroups } from "../constants";
import { Group } from "./group";

export default function MainExample() {
	const navigation = useNavigation();
	return (
		<Fragment>
			{Object.entries(mainExampleGroups).map(([key, group]) => (
				<View
					key={key}
					style={{ width: "100%", gap: 12, paddingHorizontal: 36 }}
				>
					<View style={{ gap: 2 }}>
						<Text style={{ fontSize: 18, fontWeight: "600" }}>
							{group.label}
						</Text>
						<Text style={{ fontSize: 13, color: "gray" }}>{group.desc}</Text>
					</View>
					{group.routes.map((route) => (
						<Group
							key={route.screen}
							onPress={() => navigation.navigate(route.screen as never)}
						>
							<Text style={styles.link}>{route.screen}</Text>
							<Text style={styles.dimmed}>{route.label}</Text>
						</Group>
					))}
				</View>
			))}
		</Fragment>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 12,
	},

	link: {
		fontSize: 16,
		fontWeight: "500",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	dimmed: {
		fontSize: 13,
		color: "gray",
	},
});
