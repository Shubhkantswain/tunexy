import { useState } from "react"
import {
    Drawer, DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "~/components/ui/drawer"

function MobileLeftSideInfo() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex items-center gap-3 min-w-0">
            <div onClick={() => setIsOpen(true)}>
                <img
                    src="https://cms.pixso.net/images/articles/music-player-ui.png" // Replace with dynamic src if needed
                    alt="Episode thumbnail"
                    className="w-11 h-11 rounded-md object-cover"
                />
            </div>
            <div className="flex flex-col overflow-hidden">
                <p className="text-sm font-medium truncate">Mahabharata Epissiiss</p>
                {/* <p className="text-xs text-gray-400 truncate">The Stories of Mahabhara</p> */}
                <div className="text-xs text-gray-400 truncate">{"The Stories of Mahabhara"}</div>

            </div>

            <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                <DrawerContent className="bg-black h-full w-full">
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        {/* <Button>Submit</Button> */}
                        <DrawerClose>
                            {/* <Button variant="outline">Cancel</Button> */}
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </div>
    )
}

export default MobileLeftSideInfo