import { NavigationActions } from 'react-navigation'

export const resetTo = ({ routeName, params, action }) =>
	NavigationActions.reset({
	    index: 0,
	    actions: [
	      NavigationActions.navigate({ routeName, params, action })
	    ],
	})

export const setParamsAction = (token, logoImage) => NavigationActions.setParams({
  params: { token: token, logoImage: logoImage },
  key: 'tokenVal',
});

export const navigate = ({ routeName, params, action }) => NavigationActions.navigate({ routeName, params, action })
