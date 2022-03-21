# -*- mode: python ; coding: utf-8 -*-


block_cipher = None


a = Analysis(
    ["main.py"],
    pathex=[],
    binaries=[],
    datas=[
        ("mainwindow.ui", "."),
        ("images/logo_white_960.png", "images"),
        ("images/ofai_logo_128.png", "images"),
        ("images/protohaus_makerspace_logo_128.png", "images"),
        ("images/icon_512.ico", "images"),
        ("images/icon_512.png", "images"),
        ("images/icon_256.png", "images"),
        ("images/icon_128.png", "images"),
        ("images/icon_64.png", "images"),
        ("images/icon_32.png", "images"),
        ("images/icon_16.png", "images"),
        ("fonts/Lato-Regular.ttf", "fonts"),
        ("spiffs/root_cas.pem", "spiffs"),
    ],
    hiddenimports=["PySide2.QtXml"],
    hookspath=[],
    runtime_hooks=[],
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
    noarchive=False,
)
pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)
exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.zipfiles,
    a.datas,
    [],
    name="inamata_flasher",
    icon="images/icon_512.ico",
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=False,
)
