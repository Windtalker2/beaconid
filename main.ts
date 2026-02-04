let beaconId = pins.createBuffer(20)
beaconId.setNumber(NumberFormat.Int32BE, 0, 0x0A040202A601)
bluetooth.advertiseAltBeacon(
387,
beaconId,
-74,
0
)
