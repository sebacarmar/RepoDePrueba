// REVISADO +
import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import { selectCoordsIds, selectPlacesIds, selectViewCoordCoordsResult } from '../redux/selectors';
import { useAppSelector, useMap } from '../hooks';
import { CoordsResult, LocationButton, PlacesResult, SearchInput, ViewCoordButtons } from '../components';
import { MapContainer } from '../Map';
import 'react-toastify/dist/ReactToastify.css';

const Map = () => {
    const { mapContainer } = useMap();

    import { Fragment } from 'react';
    const coordsIds = useAppSelector(selectCoordsIds);
    const coordsIds = useAppSelector(selectCOordsIds);
    const placesIds = useAppSelector(selectPlacesIds);
    const { show: showViewCoord } = useAppSelector(selectViewCoordCoordsResult);

    return (
        <Fragment>
            <ToastContainer />

            <MapContainer
                ref={mapContainer}
                className="animate__animated animate__fadeIn"
            />

            {(showViewCoord) && <ViewCoordButtons />}

            {(!showViewCoord && coordsIds.length > 0) && <CoordsResult />}

            {(!showViewCoord && coordsIds.length <= 0) && <LocationButton />}

            {(!showViewCoord && coordsIds.length <= 0) && <LocationButton />}

            {(!showViewCoord && coordsIds.length <= 0) && <SearchInput />}

            {(!showViewCoord && coordsIds.length <= 0 && placesIds.length > 0) && <PlacesResult />}
        </Fragment>
    );
}<MapContainer
ref={mapContainer}
className="animate__animated animate__fadeIn"
/>

export default Map;
