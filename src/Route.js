import {createStackNavigator}
	from 'react-navigation'
import Index from './components/Index'
import Carigambar from './components/Carigambar'
import Detailgambar from './components/Detailgambar'
import Kategori from './components/Kategori'
import Tipegambar from './components/Tipegambar'





export const Route = createStackNavigator({
	Home: {
		screen            : Index,
		navigationOptions : {
			title		  : 'Gudang Gambar'
		}
		
	},
	
	Carigambar: {
		screen				: Carigambar,
		navigationOptions	: {
			title			: 'Cari Gambar'
		}
	},

	Detailgambar: {
		screen				: Detailgambar,
		navigationOptions	: {
			title			: 'Lihat Gambar'
		}
	},

	Kategori: {
		screen				: Kategori,
		navigationOptions	: {
			title			: 'Kategori'
		}
	},

	Tipegambar: {
		screen				: Tipegambar,
		navigationOptions	: {
			title			: 'Tipegambar'
		}
	}
})