# -*- mode: python ; coding: utf-8 -*-
from pathlib import Path
import platform

block_cipher = None

site_packages_data = [
    "esptool/targets/stub_flasher/", # Required
    "espefuse/efuse_defs/", # Required
    "certifi", # Possibly unneeded
]
if platform.system() == "Linux":
    site_packages_data.append("pexpect/bashrc.sh") # Possibly unneeded
    site_packages_path = Path(os.getenv("VIRTUAL_ENV")) / "lib/python3.10/site-packages/"
else:
    site_packages_path = Path(os.getenv("VIRTUAL_ENV")) / "Lib/site-packages/"
bundled_site_packages_data = [
    (str(site_packages_path / path), str(Path(path))) for path in site_packages_data
]

a = Analysis(
    ["../src/main.py"],
    pathex=[],
    binaries=[],
    datas=[
        ("../uis/mainwindow.ui", "uis"),
        ("../images/inamata_logo_white_128.png", "images"),
        ("../images/icon_512.ico", "images"),
        ("../images/icon_512.png", "images"),
        ("../images/icon_256.png", "images"),
        ("../images/icon_128.png", "images"),
        ("../images/icon_64.png", "images"),
        ("../images/icon_32.png", "images"),
        ("../images/icon_16.png", "images"),
        ("../images/question-mark-line-icon.png", "images"),
        ("../images/setting-line-icon.png", "images"),
        ("../fonts/Lato-Regular.ttf", "fonts"),
        ("../littlefs_partition/root_cas.pem", "littlefs_partition"),
        *bundled_site_packages_data,
],
    hiddenimports=["PySide2.QtXml"],
    hookspath=[],
    hooksconfig={},
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
    [],
    exclude_binaries=True,
    name="inamata_flasher",
    icon="../images/icon_512.ico",
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    console=False,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
    version="../publish/windows/file_version_info.txt",
)
coll = COLLECT(
    exe,
    a.binaries,
    a.zipfiles,
    a.datas,
    strip=False,
    upx=True,
    upx_exclude=[],
    name='inamata-flasher-dir',
)