import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import TabContract from "../pages/contract/TabContract.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/TabContract">
                <TabContract/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews