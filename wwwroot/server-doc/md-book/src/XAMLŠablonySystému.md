# Úvod   ESB Knihovny Kódů a Šablony  

Knihovny kódů implementovaných v projektu. 
Většinou už budete jen opakovat co bylo vytvořeno, takže stačí vykopírovat z Těchto Knihoven

Těchto pár Šablon Stačí na tvorbu Multimediálního Systému

# ESB -WPF XAML Šablony,   

Standardní I mediální šablony pro Vývoj Systému   ### Manuální ServerSettingPage XAML     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.ServerSettingListPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    d:DesignHeight="500"
    d:DesignWidth="600"
    Tag="Setting"
    mc:Ignorable="d">
    <UserControl.Resources>
        <Thickness x:Key="ControlMargin">0 5 0 0</Thickness>
        <Style
            x:Key="NormalCaseColumnHeader"
            BasedOn="{StaticResource MetroDataGridColumnHeader}"
            TargetType="{x:Type DataGridColumnHeader}">
            <Setter Property="Controls:ControlsHelper.ContentCharacterCasing" Value="Normal" />
        </Style>
    </UserControl.Resources>

    <Grid Name="configuration">
        <Grid
            Width="Auto" Height="Auto" Margin="0,0,0,0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch"
            ForceCursor="False" ShowGridLines="False">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="300" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition />
                <RowDefinition Height="110" />
            </Grid.RowDefinitions>

            <GroupBox
                x:Name="gb_coreSettings" Grid.Row="0" Grid.Column="0" Grid.ColumnSpan="4" Margin="5">
                <Grid Background="{DynamicResource WhiteBrush}" Visibility="Visible">
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="200" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                    </Grid.ColumnDefinitions>
                    <Grid.RowDefinitions>
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                    </Grid.RowDefinitions>

                    <TextBox
                        x:Name="txt_specialServerServiceName" Grid.Row="0" Grid.Column="0" Margin="0,2,0,2" HorizontalContentAlignment="Left">
                        <TextBox.ToolTip>
                            <TextBlock>
                                Its the Server Service Name for Registering in Operation System.<LineBreak />
                                This Name is Used in All informations, registrations and info of Server.</TextBlock>
                        </TextBox.ToolTip>
                    </TextBox>

                    <Label
                        x:Name="lbl_specialServerLanguage" Grid.Row="0" Grid.Column="1" HorizontalAlignment="Right" />
                    <ComboBox
                        x:Name="cb_specialServerLanguage" Grid.Row="0" Grid.Column="2" Margin="0,2,0,2" HorizontalAlignment="Left"
                        DisplayMemberPath="Name" IsEnabled="true" SelectedValuePath="Value">
                        <ComboBox.ToolTip>
                            <TextBlock>
                                Server Language is for Set the responses of API messages. - "BackendCheck for Example"<LineBreak />
                                Can be used for WebPages, translating on Background from Central Dictionary<LineBreak />
                                Actualy used By Background Server Core and Hard API responses</TextBlock>
                        </ComboBox.ToolTip>
                    </ComboBox>

                    <CheckBox
                        x:Name="chb_specialCoreCheckerEmailSenderActive" Grid.Row="0" Grid.Column="2" HorizontalAlignment="Right">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                Server has monitor of Fails on Backgroud<LineBreak />
                                Enable the automatic Sending Emails with Detected Problems by Server.<LineBreak />
                                Incorrect Server statuses are monitored and sent to inserted service email<LineBreak />
                                Its run only in Production mode. in Debud mode are the detected fails written to console.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_specialEnableMassEmail" Grid.Row="0" Grid.Column="3" HorizontalAlignment="Right">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This config Enable Mass emailing Service API<LineBreak />
                                Server will send All Email Request List Over Server Emailer.<LineBreak />
                                Format of API Request you can find in Documentation</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_specialUseDbLocalAutoupdatedDials" Grid.Row="0" Grid.Column="4" HorizontalAlignment="Right">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This Enable using Tables As OneTime Load with monitor for Changing.<LineBreak />
                                Actually is defined table LanguageList for Translation.<LineBreak />
                                Table is Loaded to Server Memory and communication with this table is Without Database Connection.<LineBreak />
                                If is Detected some content change - it be processed, refreshed and next run in this mode.<LineBreak />
                            </TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                </Grid>
            </GroupBox>

            <GroupBox
                x:Name="gb_databaseEngine" Grid.Row="1" Grid.Column="0" Grid.ColumnSpan="4" Margin="5">
                <Grid Background="{DynamicResource WhiteBrush}" Visibility="Visible">
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="200" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                    </Grid.ColumnDefinitions>
                    <Grid.RowDefinitions>
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                    </Grid.RowDefinitions>

                    <CheckBox
                        x:Name="chb_databaseInternalCachingEnabled" Grid.Row="0" Grid.Column="0" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                Entity Framework has Custom Cache Controller.<LineBreak />
                                Can be good for low-volatile data. But its Duplicate Functions with Same Service on Database Server<LineBreak />
                                Recommended is disable, for clean direct working with DB.<LineBreak />
                                Important is correct setting on DB Engine.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <Label
                        x:Name="lbl_databaseInternalCacheTimeoutMin" Grid.Row="0" Grid.Column="3" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
                    <Controls:NumericUpDown
                        x:Name="txt_databaseInternalCacheTimeoutMin" Grid.Row="0" Grid.Column="4" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                        Controls:TextBoxHelper.ClearTextButton="true" Controls:TextBoxHelper.Watermark="" Maximum="9999" Minimum="1">
                        <Controls:NumericUpDown.ToolTip>
                            <TextBlock>
                                Entity Framework has Custom Cache Controller.<LineBreak />
                                Its Timweout for Data validation and refreshing</TextBlock>
                        </Controls:NumericUpDown.ToolTip>
                    </Controls:NumericUpDown>
                </Grid>
            </GroupBox>

            <GroupBox
                x:Name="gb_serverServices" Grid.Row="2" Grid.Column="0" Grid.ColumnSpan="4" Margin="5">
                <Grid Background="{DynamicResource WhiteBrush}" Visibility="Visible">
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="200" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                    </Grid.ColumnDefinitions>
                    <Grid.RowDefinitions>
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                    </Grid.RowDefinitions>

                    <CheckBox
                        x:Name="chb_serverTimeTokenValidationEnabled" Grid.Row="0" Grid.Column="0" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                If this is enabled, used tokens are checked for timeout.<LineBreak />
                                If is disabled the token validity is valid everyTime<LineBreak />
                                Validation Check the timeout and the allow User</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_serverRazorWebPagesEngineEnabled" Grid.Row="0" Grid.Column="2" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                By this set the Server Has enabled Razor Engine<LineBreak />
                                This is need when you develop some Razor webPages "cshtml"<LineBreak />
                                This Engine automaticaly set Pages Ednpoints.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_serverEnableWebSocketMonitor" Grid.Row="0" Grid.Column="3" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                By this set Enable Server Core Logging to the WebSocket Stream<LineBreak />
                                Its for remote monitoring of Server Core Status<LineBreak />
                                This Example Vision For Central Managing Informations.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_serverMvcWebPagesEngineEnabled" Grid.Row="0" Grid.Column="4" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                By this set the Server Has enabled MVC Engine<LineBreak />
                                This Cann be possible for Addons, Modules, Your MVC WebPages<LineBreak />
                                This Engine automaticaly set Pages Ednpoints.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_serverWebSocketEngineEnabled" Grid.Row="1" Grid.Column="0" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This config Enable WebSocket Support<LineBreak />
                                In Solution is prepared Basic WebSocket Server for Central working.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_serverFtpEngineEnabled" Grid.Row="1" Grid.Column="2" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This config Enable FTP on Server. FTP is actualy unlocked.<LineBreak />
                                FTP is oppened for EveryOne without authorization.<LineBreak />
                                Its Separated Place on the Backend Server.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_serverFtpSecurityEnabled" Grid.Row="1" Grid.Column="3" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This config Enable Securited Login on FTP Server.<LineBreak />
                                For access you must login.Valid Accounts are from Server DB<LineBreak />
                                The Service has implement with Online Remote Control with using over authorized API</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_serverWebBrowserEnabled" Grid.Row="1" Grid.Column="4" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This config enable web browsing on Urls, where are not any WebPages.<LineBreak />
                                Its ideally for Saving Materials and others.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                </Grid>
            </GroupBox>


            <GroupBox
                x:Name="gb_apiConfiguration" Grid.Row="3" Grid.Column="0" Grid.ColumnSpan="4" Margin="5">
                <Grid Background="{DynamicResource WhiteBrush}" Visibility="Visible">
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="200" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                    </Grid.ColumnDefinitions>
                    <Grid.RowDefinitions>
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                    </Grid.RowDefinitions>

                    <Label
                        x:Name="lbl_configServerStartupPort" Grid.Row="0" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
                    <Controls:NumericUpDown
                        x:Name="txt_configServerStartupPort" Grid.Row="0" Grid.Column="1" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                        Maximum="65535" Minimum="1">
                        <Controls:NumericUpDown.ToolTip>
                            <TextBlock>
                                This is Startup Port For All Server Services.<LineBreak />
                                Services are run on All Available IP addresses on machine.</TextBlock>
                        </Controls:NumericUpDown.ToolTip>
                    </Controls:NumericUpDown>

                    <Label
                        x:Name="lbl_configWebSocketTimeoutMin" Grid.Row="0" Grid.Column="2" Grid.ColumnSpan="2" HorizontalAlignment="Right"
                        HorizontalContentAlignment="Right" />
                    <Controls:NumericUpDown
                        x:Name="txt_configWebSocketTimeoutMin" Grid.Row="0" Grid.Column="4" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                        Maximum="65535" Minimum="1" ToolTip="Timeout on inactivity for Websocket Connection." />

                    <Label
                        x:Name="lbl_configMaxWebSocketBufferSizeKb" Grid.Row="1" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
                    <Controls:NumericUpDown
                        x:Name="txt_configMaxWebSocketBufferSizeKb" Grid.Row="1" Grid.Column="1" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                        Maximum="65535" Minimum="1" ToolTip="Maximum allowed size for Web Socket Communication. (Kb)" />

                    <CheckBox
                        x:Name="chb_configServerStartupOnHttps" Grid.Row="1" Grid.Column="2" HorizontalAlignment="Center">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                If this is enabled the Server will start on HTTPS protocol.<LineBreak />
                                Certificate is Generated automatically.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <Label
                        x:Name="lbl_configApiTokenTimeoutMin" Grid.Row="1" Grid.Column="3" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
                    <Controls:NumericUpDown
                        x:Name="txt_configApiTokenTimeoutMin" Grid.Row="1" Grid.Column="4" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                        Maximum="99999" Minimum="1" ToolTip="Timeout on inactivity for JWT Bearer Token." />


                    <TextBox
                        x:Name="txt_configCertificateDomain" Grid.Row="2" Grid.Column="0" Margin="0,2,0,2" HorizontalAlignment="Stretch"
                        Controls:TextBoxHelper.Watermark="127.0.0.1">
                        <TextBox.ToolTip>
                            <TextBlock>
                                Insert Certificate Domain name or IP address.<LineBreak />
                                It will be set in automatic generated certificate in HTTPS running.</TextBlock>
                        </TextBox.ToolTip>
                    </TextBox>

                    <PasswordBox
                        x:Name="txt_configCertificatePassword" Grid.Row="2" Grid.Column="1" Margin="2,2,0,2" HorizontalAlignment="Stretch"
                        Style="{StaticResource MetroButtonRevealedPasswordBox}">
                        <PasswordBox.ToolTip>
                            <TextBlock>
                                Insert Certificate Password.<LineBreak />
                                It will be set in automatic generated certificate in HTTPS running.</TextBlock>
                        </PasswordBox.ToolTip>
                    </PasswordBox>

                    <TextBox
                        x:Name="txt_configJwtLocalKey" Grid.Row="2" Grid.Column="2" Grid.ColumnSpan="2" Margin="30,2,0,2"
                        HorizontalAlignment="Stretch">
                        <TextBox.ToolTip>
                            <TextBlock>
                                JWT Bearer Encryption Key.<LineBreak />
                                This is Using for generation Communication JWT Bearer Token.</TextBlock>
                        </TextBox.ToolTip>
                    </TextBox>

                    <Button
                        x:Name="btn_generateKey" Grid.Row="2" Grid.Column="4" Width="150" Height="25"
                        Margin="5,2,0,0" Padding="5,4,5,5" HorizontalAlignment="Right" VerticalAlignment="Top" Controls:ButtonHelper.PreserveTextCase="True"
                        Click="BtnGenerateJwtKey_Click"
                        Style="{DynamicResource AccentedSquareButtonStyle}">
                        <Button.ToolTip>Generate 40 char lenght Random Key</Button.ToolTip>
                    </Button>
                </Grid>
            </GroupBox>


            <GroupBox
                x:Name="gb_serverModules" Grid.Row="4" Grid.Column="0" Grid.ColumnSpan="4" Margin="5">
                <Grid Background="{DynamicResource WhiteBrush}" Visibility="Visible">
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="200" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                    </Grid.ColumnDefinitions>
                    <Grid.RowDefinitions>
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                    </Grid.RowDefinitions>

                    <CheckBox
                        x:Name="chb_moduleSwaggerApiDocEnabled" Grid.Row="0" Grid.Column="0" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                Enable Autogenerator for full Api documentation with online testing<LineBreak />
                                If is disabled the token validity is valid everyTime<LineBreak />
                                Validation Check the timeout and the allow User</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_moduleDataManagerEnabled" Grid.Row="0" Grid.Column="1" HorizontalAlignment="Right">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                If this is enabled, in Debug mode is avaiable Data Manager<LineBreak />
                                Data manager is autogenerated for full data management</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_moduleMdDocumentationEnabled" Grid.Row="0" Grid.Column="3" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This setting Enable Project Documentation MD Viewer<LineBreak />
                            </TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_moduleHealthServiceEnabled" Grid.Row="0" Grid.Column="4" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                If this is enabled, Server HeatchCheck service<LineBreak />
                                control all configured statuses in Program<LineBreak />
                                is possible check more than 200 Server/NET/IS/DB/etc. statuses</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_moduleDbDiagramGeneratorEnabled" Grid.Row="1" Grid.Column="0" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This setting Enable DB Diagram Generator API.<LineBreak />
                                By API request is generated actual Database Schema.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <Label
                        x:Name="lbl_moduleHealthServiceRefreshIntervalSec" Grid.Row="1" Grid.Column="3" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
                    <Controls:NumericUpDown
                        x:Name="txt_moduleHealthServiceRefreshIntervalSec" Grid.Row="1" Grid.Column="4" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                        Maximum="1000" Minimum="1" ToolTip="Refresh Interval for checking all monitored Statuses." />

                </Grid>
            </GroupBox>

            <GroupBox
                x:Name="gb_emailService" Grid.Row="5" Grid.Column="0" Grid.ColumnSpan="4" Margin="5">
                <Grid Background="{DynamicResource WhiteBrush}" Visibility="Visible">
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="200" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                    </Grid.ColumnDefinitions>
                    <Grid.RowDefinitions>
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                    </Grid.RowDefinitions>

                    <Label
                        x:Name="lbl_emailerServiceEmailAddress" Grid.Row="0" Grid.Column="0" HorizontalAlignment="Right" />
                    <TextBox
                        x:Name="txt_emailerServiceEmailAddress" Grid.Row="0" Grid.Column="1" Margin="0,2,0,2" HorizontalContentAlignment="Left">
                        <TextBox.ToolTip>
                            <TextBlock>
                                Insert Email Address for administration of detected fails by Server background.<LineBreak />
                                Its run only in Production mode.<LineBreak />
                                This is Email address, where will be sent all detected problems</TextBlock>
                        </TextBox.ToolTip>
                    </TextBox>

                    <Label
                        x:Name="lbl_emailerSMTPServerAddress" Grid.Row="0" Grid.Column="2" HorizontalAlignment="Right" />
                    <TextBox
                        x:Name="txt_emailerSMTPServerAddress" Grid.Row="0" Grid.Column="3" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                        ToolTip="Insert Server addres IP or full Domain name for email Service." />

                    <CheckBox
                        x:Name="chb_emailerSMTPSslIsEnabled" Grid.Row="0" Grid.Column="4" HorizontalAlignment="Right">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                Enable Ssl Email Connection.<LineBreak />
                                Next must be set correct port for SSL</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <Label
                        x:Name="lbl_emailerSMTPPort" Grid.Row="1" Grid.Column="0" HorizontalAlignment="Left" />
                    <Controls:NumericUpDown
                        x:Name="txt_emailerSMTPPort" Grid.Row="1" Grid.Column="0" HorizontalAlignment="Right" Maximum="65535"
                        Minimum="1"
                        Style="{StaticResource DefaultSystemNumericStyle}"
                        ToolTip="Insert SMTP Port of external server for email Service. Typically 25/465" />

                    <TextBox
                        x:Name="txt_emailerSMTPLoginUsername" Grid.Row="1" Grid.Column="1" Margin="10,2,0,2" HorizontalAlignment="Stretch"
                        ToolTip="SMTP username for login to external Emailserver. Its using only for sending of services Emails." />

                    <Label
                        x:Name="lbl_emailerSMTPLoginPassword" Grid.Row="1" Grid.Column="2" HorizontalAlignment="Right" />
                    <PasswordBox
                        x:Name="txt_emailerSMTPLoginPassword" Grid.Row="1" Grid.Column="3" Margin="0,2,0,2"
                        Style="{StaticResource MetroButtonRevealedPasswordBox}"
                        ToolTip="SMTP password for login and send service Email by Server" />

                    <Button
                        x:Name="btn_sendTestEmail" Grid.Row="1" Grid.Column="4" Width="150" Height="25"
                        Margin="5,2,5,0" Padding="5,4,5,5" HorizontalAlignment="Right" VerticalAlignment="Top" Controls:ButtonHelper.PreserveTextCase="True"
                        Click="BtnSendTestEmail_Click"
                        Style="{DynamicResource AccentedSquareButtonStyle}">
                        <Button.ToolTip>Send Test Email</Button.ToolTip>
                    </Button>
                </Grid>
            </GroupBox>


            <Button
                Name="btn_save" Grid.Row="20" Grid.Column="0" Width="200" Height="40"
                Margin="44,21,0,44" HorizontalAlignment="Left" VerticalAlignment="Bottom" Controls:ButtonHelper.PreserveTextCase="True" Click="BtnSave_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />

            <Button
                Name="btn_exportServerConfig" Grid.Row="20" Grid.Column="1" Width="200" Height="40"
                Margin="0,21,0,44" HorizontalAlignment="Center" VerticalAlignment="Bottom" Controls:ButtonHelper.PreserveTextCase="True" Click="BtnExport_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />

            <Button
                Name="btn_restartServer" Grid.Row="20" Grid.Column="3" Width="200" Height="40"
                Margin="0,21,0,44" HorizontalAlignment="Center" VerticalAlignment="Bottom" Controls:ButtonHelper.PreserveTextCase="True" Click="BtnRestartServer_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />

        </Grid>
    </Grid>
</UserControl>

```    
			
---   
			### XAML Formulář Nastavení ve skupinách     
			
```xml   
			<UserControl
    x:Class="GlobalNET.Pages.ServerSettingPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    d:DesignHeight="500"
    d:DesignWidth="600"
    Tag="Setting"
    mc:Ignorable="d">
    <UserControl.Resources>
        <Thickness x:Key="ControlMargin">0 5 0 0</Thickness>
        <Style
            x:Key="NormalCaseColumnHeader"
            BasedOn="{StaticResource MetroDataGridColumnHeader}"
            TargetType="{x:Type DataGridColumnHeader}">
            <Setter Property="Controls:ControlsHelper.ContentCharacterCasing" Value="Normal" />
        </Style>
    </UserControl.Resources>

    <Grid Name="configuration">
        <Grid
            Width="Auto" Height="Auto" Margin="0,0,0,0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch"
            ForceCursor="False" ShowGridLines="False">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="300" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition />
                <RowDefinition Height="110" />
            </Grid.RowDefinitions>

            <GroupBox
                x:Name="gb_coreSettings" Grid.Row="0" Grid.Column="0" Grid.ColumnSpan="4" Margin="5">
                <Grid Background="{DynamicResource WhiteBrush}" Visibility="Visible">
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="200" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                    </Grid.ColumnDefinitions>
                    <Grid.RowDefinitions>
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                    </Grid.RowDefinitions>

                    <TextBox
                        x:Name="txt_specialServerServiceName" Grid.Row="0" Grid.Column="0" Margin="0,2,0,2" HorizontalContentAlignment="Left">
                        <TextBox.ToolTip>
                            <TextBlock>
                                Its the Server Service Name for Registering in Operation System.<LineBreak />
                                This Name is Used in All informations, registrations and info of Server.</TextBlock>
                        </TextBox.ToolTip>
                    </TextBox>

                    <Label
                        x:Name="lbl_specialServerLanguage" Grid.Row="0" Grid.Column="1" HorizontalAlignment="Right" />
                    <ComboBox
                        x:Name="cb_specialServerLanguage" Grid.Row="0" Grid.Column="2" Margin="0,2,0,2" HorizontalAlignment="Left"
                        DisplayMemberPath="Name" IsEnabled="true" SelectedValuePath="Value">
                        <ComboBox.ToolTip>
                            <TextBlock>
                                Server Language is for Set the responses of API messages. - "BackendCheck for Example"<LineBreak />
                                Can be used for WebPages, translating on Background from Central Dictionary<LineBreak />
                                Actualy used By Background Server Core and Hard API responses</TextBlock>
                        </ComboBox.ToolTip>
                    </ComboBox>

                    <CheckBox
                        x:Name="chb_specialCoreCheckerEmailSenderActive" Grid.Row="0" Grid.Column="2" HorizontalAlignment="Right">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                Server has monitor of Fails on Backgroud<LineBreak />
                                Enable the automatic Sending Emails with Detected Problems by Server.<LineBreak />
                                Incorrect Server statuses are monitored and sent to inserted service email<LineBreak />
                                Its run only in Production mode. in Debud mode are the detected fails written to console.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_specialEnableMassEmail" Grid.Row="0" Grid.Column="3" HorizontalAlignment="Right">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This config Enable Mass emailing Service API<LineBreak />
                                Server will send All Email Request List Over Server Emailer.<LineBreak />
                                Format of API Request you can find in Documentation</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_specialUseDbLocalAutoupdatedDials" Grid.Row="0" Grid.Column="4" HorizontalAlignment="Right">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This Enable using Tables As OneTime Load with monitor for Changing.<LineBreak />
                                Actually is defined table LanguageList for Translation.<LineBreak />
                                Table is Loaded to Server Memory and communication with this table is Without Database Connection.<LineBreak />
                                If is Detected some content change - it be processed, refreshed and next run in this mode.<LineBreak />
                            </TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                </Grid>
            </GroupBox>

            <GroupBox
                x:Name="gb_databaseEngine" Grid.Row="1" Grid.Column="0" Grid.ColumnSpan="4" Margin="5">
                <Grid Background="{DynamicResource WhiteBrush}" Visibility="Visible">
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="200" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                    </Grid.ColumnDefinitions>
                    <Grid.RowDefinitions>
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                    </Grid.RowDefinitions>

                    <CheckBox
                        x:Name="chb_databaseInternalCachingEnabled" Grid.Row="0" Grid.Column="0" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                Entity Framework has Custom Cache Controller.<LineBreak />
                                Can be good for low-volatile data. But its Duplicate Functions with Same Service on Database Server<LineBreak />
                                Recommended is disable, for clean direct working with DB.<LineBreak />
                                Important is correct setting on DB Engine.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <Label
                        x:Name="lbl_databaseInternalCacheTimeoutMin" Grid.Row="0" Grid.Column="3" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
                    <Controls:NumericUpDown
                        x:Name="txt_databaseInternalCacheTimeoutMin" Grid.Row="0" Grid.Column="4" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                        Controls:TextBoxHelper.ClearTextButton="true" Controls:TextBoxHelper.Watermark="" Maximum="9999" Minimum="1">
                        <Controls:NumericUpDown.ToolTip>
                            <TextBlock>
                                Entity Framework has Custom Cache Controller.<LineBreak />
                                Its Timweout for Data validation and refreshing</TextBlock>
                        </Controls:NumericUpDown.ToolTip>
                    </Controls:NumericUpDown>
                </Grid>
            </GroupBox>

            <GroupBox
                x:Name="gb_serverServices" Grid.Row="2" Grid.Column="0" Grid.ColumnSpan="4" Margin="5">
                <Grid Background="{DynamicResource WhiteBrush}" Visibility="Visible">
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="200" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                    </Grid.ColumnDefinitions>
                    <Grid.RowDefinitions>
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                    </Grid.RowDefinitions>

                    <CheckBox
                        x:Name="chb_serverTimeTokenValidationEnabled" Grid.Row="0" Grid.Column="0" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                If this is enabled, used tokens are checked for timeout.<LineBreak />
                                If is disabled the token validity is valid everyTime<LineBreak />
                                Validation Check the timeout and the allow User</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_serverRazorWebPagesEngineEnabled" Grid.Row="0" Grid.Column="2" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                By this set the Server Has enabled Razor Engine<LineBreak />
                                This is need when you develop some Razor webPages "cshtml"<LineBreak />
                                This Engine automaticaly set Pages Ednpoints.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_serverEnableWebSocketMonitor" Grid.Row="0" Grid.Column="3" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                By this set Enable Server Core Logging to the WebSocket Stream<LineBreak />
                                Its for remote monitoring of Server Core Status<LineBreak />
                                This Example Vision For Central Managing Informations.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_serverMvcWebPagesEngineEnabled" Grid.Row="0" Grid.Column="4" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                By this set the Server Has enabled MVC Engine<LineBreak />
                                This Cann be possible for Addons, Modules, Your MVC WebPages<LineBreak />
                                This Engine automaticaly set Pages Ednpoints.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_serverWebSocketEngineEnabled" Grid.Row="1" Grid.Column="0" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This config Enable WebSocket Support<LineBreak />
                                In Solution is prepared Basic WebSocket Server for Central working.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_serverFtpEngineEnabled" Grid.Row="1" Grid.Column="2" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This config Enable FTP on Server. FTP is actualy unlocked.<LineBreak />
                                FTP is oppened for EveryOne without authorization.<LineBreak />
                                Its Separated Place on the Backend Server.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_serverFtpSecurityEnabled" Grid.Row="1" Grid.Column="3" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This config Enable Securited Login on FTP Server.<LineBreak />
                                For access you must login.Valid Accounts are from Server DB<LineBreak />
                                The Service has implement with Online Remote Control with using over authorized API</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_serverWebBrowserEnabled" Grid.Row="1" Grid.Column="4" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This config enable web browsing on Urls, where are not any WebPages.<LineBreak />
                                Its ideally for Saving Materials and others.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                </Grid>
            </GroupBox>


            <GroupBox
                x:Name="gb_apiConfiguration" Grid.Row="3" Grid.Column="0" Grid.ColumnSpan="4" Margin="5">
                <Grid Background="{DynamicResource WhiteBrush}" Visibility="Visible">
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="200" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                    </Grid.ColumnDefinitions>
                    <Grid.RowDefinitions>
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                    </Grid.RowDefinitions>

                    <Label
                        x:Name="lbl_configServerStartupPort" Grid.Row="0" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
                    <Controls:NumericUpDown
                        x:Name="txt_configServerStartupPort" Grid.Row="0" Grid.Column="1" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                        Maximum="65535" Minimum="1">
                        <Controls:NumericUpDown.ToolTip>
                            <TextBlock>
                                This is Startup Port For All Server Services.<LineBreak />
                                Services are run on All Available IP addresses on machine.</TextBlock>
                        </Controls:NumericUpDown.ToolTip>
                    </Controls:NumericUpDown>

                    <Label
                        x:Name="lbl_configWebSocketTimeoutMin" Grid.Row="0" Grid.Column="2" Grid.ColumnSpan="2" HorizontalAlignment="Right"
                        HorizontalContentAlignment="Right" />
                    <Controls:NumericUpDown
                        x:Name="txt_configWebSocketTimeoutMin" Grid.Row="0" Grid.Column="4" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                        Maximum="65535" Minimum="1" ToolTip="Timeout on inactivity for Websocket Connection." />

                    <Label
                        x:Name="lbl_configMaxWebSocketBufferSizeKb" Grid.Row="1" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
                    <Controls:NumericUpDown
                        x:Name="txt_configMaxWebSocketBufferSizeKb" Grid.Row="1" Grid.Column="1" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                        Maximum="65535" Minimum="1" ToolTip="Maximum allowed size for Web Socket Communication. (Kb)" />

                    <CheckBox
                        x:Name="chb_configServerStartupOnHttps" Grid.Row="1" Grid.Column="2" HorizontalAlignment="Center">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                If this is enabled the Server will start on HTTPS protocol.<LineBreak />
                                Certificate is Generated automatically.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <Label
                        x:Name="lbl_configApiTokenTimeoutMin" Grid.Row="1" Grid.Column="3" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
                    <Controls:NumericUpDown
                        x:Name="txt_configApiTokenTimeoutMin" Grid.Row="1" Grid.Column="4" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                        Maximum="99999" Minimum="1" ToolTip="Timeout on inactivity for JWT Bearer Token." />


                    <TextBox
                        x:Name="txt_configCertificateDomain" Grid.Row="2" Grid.Column="0" Margin="0,2,0,2" HorizontalAlignment="Stretch"
                        Controls:TextBoxHelper.Watermark="127.0.0.1">
                        <TextBox.ToolTip>
                            <TextBlock>
                                Insert Certificate Domain name or IP address.<LineBreak />
                                It will be set in automatic generated certificate in HTTPS running.</TextBlock>
                        </TextBox.ToolTip>
                    </TextBox>

                    <PasswordBox
                        x:Name="txt_configCertificatePassword" Grid.Row="2" Grid.Column="1" Margin="2,2,0,2" HorizontalAlignment="Stretch"
                        Style="{StaticResource MetroButtonRevealedPasswordBox}">
                        <PasswordBox.ToolTip>
                            <TextBlock>
                                Insert Certificate Password.<LineBreak />
                                It will be set in automatic generated certificate in HTTPS running.</TextBlock>
                        </PasswordBox.ToolTip>
                    </PasswordBox>

                    <TextBox
                        x:Name="txt_configJwtLocalKey" Grid.Row="2" Grid.Column="2" Grid.ColumnSpan="2" Margin="30,2,0,2"
                        HorizontalAlignment="Stretch">
                        <TextBox.ToolTip>
                            <TextBlock>
                                JWT Bearer Encryption Key.<LineBreak />
                                This is Using for generation Communication JWT Bearer Token.</TextBlock>
                        </TextBox.ToolTip>
                    </TextBox>

                    <Button
                        x:Name="btn_generateKey" Grid.Row="2" Grid.Column="4" Width="150" Height="25"
                        Margin="5,2,0,0" Padding="5,4,5,5" HorizontalAlignment="Right" VerticalAlignment="Top" Controls:ButtonHelper.PreserveTextCase="True"
                        Click="BtnGenerateJwtKey_Click"
                        Style="{DynamicResource AccentedSquareButtonStyle}">
                        <Button.ToolTip>Generate 40 char lenght Random Key</Button.ToolTip>
                    </Button>
                </Grid>
            </GroupBox>


            <GroupBox
                x:Name="gb_serverModules" Grid.Row="4" Grid.Column="0" Grid.ColumnSpan="4" Margin="5">
                <Grid Background="{DynamicResource WhiteBrush}" Visibility="Visible">
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="200" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                    </Grid.ColumnDefinitions>
                    <Grid.RowDefinitions>
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                    </Grid.RowDefinitions>

                    <CheckBox
                        x:Name="chb_moduleSwaggerApiDocEnabled" Grid.Row="0" Grid.Column="0" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                Enable Autogenerator for full Api documentation with online testing<LineBreak />
                                If is disabled the token validity is valid everyTime<LineBreak />
                                Validation Check the timeout and the allow User</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_moduleDataManagerEnabled" Grid.Row="0" Grid.Column="1" HorizontalAlignment="Right">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                If this is enabled, in Debug mode is avaiable Data Manager<LineBreak />
                                Data manager is autogenerated for full data management</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_moduleMdDocumentationEnabled" Grid.Row="0" Grid.Column="3" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This setting Enable Project Documentation MD Viewer<LineBreak />
                            </TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_moduleHealthServiceEnabled" Grid.Row="0" Grid.Column="4" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                If this is enabled, Server HeatchCheck service<LineBreak />
                                control all configured statuses in Program<LineBreak />
                                is possible check more than 200 Server/NET/IS/DB/etc. statuses</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <CheckBox
                        x:Name="chb_moduleDbDiagramGeneratorEnabled" Grid.Row="1" Grid.Column="0" HorizontalAlignment="Left">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                This setting Enable DB Diagram Generator API.<LineBreak />
                                By API request is generated actual Database Schema.</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <Label
                        x:Name="lbl_moduleHealthServiceRefreshIntervalSec" Grid.Row="1" Grid.Column="3" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
                    <Controls:NumericUpDown
                        x:Name="txt_moduleHealthServiceRefreshIntervalSec" Grid.Row="1" Grid.Column="4" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                        Maximum="1000" Minimum="1" ToolTip="Refresh Interval for checking all monitored Statuses." />

                </Grid>
            </GroupBox>

            <GroupBox
                x:Name="gb_emailService" Grid.Row="5" Grid.Column="0" Grid.ColumnSpan="4" Margin="5">
                <Grid Background="{DynamicResource WhiteBrush}" Visibility="Visible">
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="200" />
                        <ColumnDefinition Width="*" />
                        <ColumnDefinition Width="*" />
                    </Grid.ColumnDefinitions>
                    <Grid.RowDefinitions>
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                        <RowDefinition Height="Auto" />
                    </Grid.RowDefinitions>

                    <Label
                        x:Name="lbl_emailerServiceEmailAddress" Grid.Row="0" Grid.Column="0" HorizontalAlignment="Right" />
                    <TextBox
                        x:Name="txt_emailerServiceEmailAddress" Grid.Row="0" Grid.Column="1" Margin="0,2,0,2" HorizontalContentAlignment="Left">
                        <TextBox.ToolTip>
                            <TextBlock>
                                Insert Email Address for administration of detected fails by Server background.<LineBreak />
                                Its run only in Production mode.<LineBreak />
                                This is Email address, where will be sent all detected problems</TextBlock>
                        </TextBox.ToolTip>
                    </TextBox>

                    <Label
                        x:Name="lbl_emailerSMTPServerAddress" Grid.Row="0" Grid.Column="2" HorizontalAlignment="Right" />
                    <TextBox
                        x:Name="txt_emailerSMTPServerAddress" Grid.Row="0" Grid.Column="3" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                        ToolTip="Insert Server addres IP or full Domain name for email Service." />

                    <CheckBox
                        x:Name="chb_emailerSMTPSslIsEnabled" Grid.Row="0" Grid.Column="4" HorizontalAlignment="Right">
                        <CheckBox.ToolTip>
                            <TextBlock>
                                Enable Ssl Email Connection.<LineBreak />
                                Next must be set correct port for SSL</TextBlock>
                        </CheckBox.ToolTip>
                    </CheckBox>

                    <Label
                        x:Name="lbl_emailerSMTPPort" Grid.Row="1" Grid.Column="0" HorizontalAlignment="Left" />
                    <Controls:NumericUpDown
                        x:Name="txt_emailerSMTPPort" Grid.Row="1" Grid.Column="0" HorizontalAlignment="Right" Maximum="65535"
                        Minimum="1"
                        Style="{StaticResource DefaultSystemNumericStyle}"
                        ToolTip="Insert SMTP Port of external server for email Service. Typically 25/465" />

                    <TextBox
                        x:Name="txt_emailerSMTPLoginUsername" Grid.Row="1" Grid.Column="1" Margin="10,2,0,2" HorizontalAlignment="Stretch"
                        ToolTip="SMTP username for login to external Emailserver. Its using only for sending of services Emails." />

                    <Label
                        x:Name="lbl_emailerSMTPLoginPassword" Grid.Row="1" Grid.Column="2" HorizontalAlignment="Right" />
                    <PasswordBox
                        x:Name="txt_emailerSMTPLoginPassword" Grid.Row="1" Grid.Column="3" Margin="0,2,0,2"
                        Style="{StaticResource MetroButtonRevealedPasswordBox}"
                        ToolTip="SMTP password for login and send service Email by Server" />

                    <Button
                        x:Name="btn_sendTestEmail" Grid.Row="1" Grid.Column="4" Width="150" Height="25"
                        Margin="5,2,5,0" Padding="5,4,5,5" HorizontalAlignment="Right" VerticalAlignment="Top" Controls:ButtonHelper.PreserveTextCase="True"
                        Click="BtnSendTestEmail_Click"
                        Style="{DynamicResource AccentedSquareButtonStyle}">
                        <Button.ToolTip>Send Test Email</Button.ToolTip>
                    </Button>
                </Grid>
            </GroupBox>


            <Button
                Name="btn_save" Grid.Row="20" Grid.Column="0" Width="200" Height="40"
                Margin="44,21,0,44" HorizontalAlignment="Left" VerticalAlignment="Bottom" Controls:ButtonHelper.PreserveTextCase="True" Click="BtnSave_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />

            <Button
                Name="btn_exportServerConfig" Grid.Row="20" Grid.Column="1" Width="200" Height="40"
                Margin="0,21,0,44" HorizontalAlignment="Center" VerticalAlignment="Bottom" Controls:ButtonHelper.PreserveTextCase="True" Click="BtnExport_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />

            <Button
                Name="btn_restartServer" Grid.Row="20" Grid.Column="3" Width="200" Height="40"
                Margin="0,21,0,44" HorizontalAlignment="Center" VerticalAlignment="Bottom" Controls:ButtonHelper.PreserveTextCase="True" Click="BtnRestartServer_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />

        </Grid>
    </Grid>
</UserControl>

----------------------------------------------------------------------------------------------------------------

using System.Windows;
using System.Windows.Controls;
using Org.BouncyCastle.Asn1;
using System.Net.Http;
using Newtonsoft.Json;
using GlobalNET.Classes;
using System.Diagnostics;
using GlobalNET.Api;
using GlobalNET.GlobalOperations;
using System;
using Microsoft.Win32;
using System.Collections.Generic;
using System.Web.Script.Serialization;

namespace GlobalNET.Pages
{
    public partial class ServerSettingPage : UserControl
    {
        public ServerSettingPage()
        {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, JsonConvert.DeserializeObject<Language>(App.Setting.DefaultLanguage).Value);

            gb_emailService.Header = Resources["emailService"].ToString();
            lbl_emailerServiceEmailAddress.Content = Resources["serviceEmail"].ToString();
            lbl_emailerSMTPServerAddress.Content = Resources["SMTPServer"].ToString();
            lbl_emailerSMTPPort.Content = Resources["SMTPPort"].ToString();
            chb_emailerSMTPSslIsEnabled.Content = Resources["sslIsEnabled"].ToString();
            lbl_emailerSMTPLoginPassword.Content = Resources["SMTPPassword"].ToString();

            gb_databaseEngine.Header = Resources["databaseEngine"].ToString();
            chb_databaseInternalCachingEnabled.Content = Resources["internalCachingEnabled"].ToString();
            lbl_databaseInternalCacheTimeoutMin.Content = Resources["loggingCacheTimeMinutes"].ToString();
            
            gb_coreSettings.Header = Resources["coreSettings"].ToString();
            chb_specialCoreCheckerEmailSenderActive.Content = Resources["systemCheckerEmailer"].ToString();
            chb_specialUseDbLocalAutoupdatedDials.Content = Resources["useLocalAutoupdatedDials"].ToString();
            lbl_specialServerLanguage.Content = Resources["serverLanguage"].ToString();
            chb_specialEnableMassEmail.Content = Resources["massEmailing"].ToString();

            gb_apiConfiguration.Header = Resources["apiConfiguration"].ToString();
            lbl_configServerStartupPort.Content = Resources["serverStartupPort"].ToString();
            lbl_configWebSocketTimeoutMin.Content = Resources["socketTimeoutMinutes"].ToString();
            lbl_configMaxWebSocketBufferSizeKb.Content = Resources["maxSocketBufferSizeKb"].ToString();
            lbl_configApiTokenTimeoutMin.Content = Resources["loginTimeoutMinutes"].ToString();
            chb_configServerStartupOnHttps.Content = Resources["httpsProtocol"].ToString();

            gb_serverServices.Header = Resources["serverServices"].ToString();
            chb_serverTimeTokenValidationEnabled.Content = Resources["timeTokenValidation"].ToString();
            chb_serverRazorWebPagesEngineEnabled.Content = Resources["razorWebPages"].ToString();
            chb_serverEnableWebSocketMonitor.Content = Resources["webSocketServerLogMonitor"].ToString();
            chb_serverMvcWebPagesEngineEnabled.Content = Resources["mvcWebPages"].ToString();
            chb_serverWebSocketEngineEnabled.Content = Resources["webSocketEngine"].ToString();
            chb_serverFtpEngineEnabled.Content = Resources["ftpEngine"].ToString();
            chb_serverFtpSecurityEnabled.Content = Resources["safeFTPServer"].ToString();
            chb_serverWebBrowserEnabled.Content = Resources["serverBrowserEnabled"].ToString();

            gb_serverModules.Header = Resources["serverModules"].ToString();
            chb_moduleSwaggerApiDocEnabled.Content = Resources["moduleSwaggerApi"].ToString();
            chb_moduleDataManagerEnabled.Content = Resources["moduleDataManager"].ToString();
            chb_moduleHealthServiceEnabled.Content = Resources["moduleHealthService"].ToString();

            lbl_moduleHealthServiceRefreshIntervalSec.Content = Resources["healthServiceRefresh"].ToString();
            chb_moduleMdDocumentationEnabled.Content = Resources["mdDocumentation"].ToString();
            chb_moduleDbDiagramGeneratorEnabled.Content = Resources["dbDiagram"].ToString();


            btn_sendTestEmail.Content = Resources["sendTestEmail"].ToString();
            btn_generateKey.Content = Resources["generateKey"].ToString();
            btn_save.Content = Resources["btn_save"].ToString();
            btn_exportServerConfig.Content = Resources["exportServerConfig"].ToString();
            btn_restartServer.Content = Resources["restartServer"].ToString();

            cb_specialServerLanguage.ItemsSource = SystemOperations.ServerLanguages;

            LoadDataList();

        }

        #region helper methods
        private class ExtensionsItem
        {
            public ExtensionsItem()
            {
                ident = null;
                isTrue = false;
                asn1OctetString = null;
            }

            public DerObjectIdentifier ident { get; set; }
            public bool isTrue { get; set; }
            public Asn1OctetString asn1OctetString { get; set; }
        }

        #endregion

        public async void LoadDataList()
        {
            try {
                MainWindow.ProgressRing = Visibility.Visible;
                App.ServerSetting = await ApiCommunication.GetApiRequest<List<ServerSetting>>(ApiUrls.GlobalNETServerSetting, null, null);

                txt_emailerServiceEmailAddress.Text = App.ServerSetting.Find(a => a.Key == ServerSettingKeys.EmailerServiceEmailAddress.ToString()).Value;
                txt_emailerSMTPServerAddress.Text = App.ServerSetting.Find(a => a.Key == ServerSettingKeys.EmailerSMTPServerAddress.ToString()).Value;
                txt_emailerSMTPPort.Value = double.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.EmailerSMTPPort.ToString()).Value);
                chb_emailerSMTPSslIsEnabled.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.EmailerSMTPSslIsEnabled.ToString()).Value);
                txt_emailerSMTPLoginUsername.Text = App.ServerSetting.Find(a => a.Key == ServerSettingKeys.EmailerSMTPLoginUsername.ToString()).Value;
                txt_emailerSMTPLoginPassword.Password = App.ServerSetting.Find(a => a.Key == ServerSettingKeys.EmailerSMTPLoginPassword.ToString()).Value;

                chb_databaseInternalCachingEnabled.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.DatabaseInternalCachingEnabled.ToString()).Value);
                txt_databaseInternalCacheTimeoutMin.Value = double.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.DatabaseInternalCacheTimeoutMin.ToString()).Value);

                txt_specialServerServiceName.Text = App.ServerSetting.Find(a => a.Key == ServerSettingKeys.SpecialServerServiceName.ToString()).Value;
                chb_specialCoreCheckerEmailSenderActive.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.SpecialCoreCheckerEmailSenderActive.ToString()).Value);
                chb_specialUseDbLocalAutoupdatedDials.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.SpecialUseDbLocalAutoupdatedDials.ToString()).Value);
                cb_specialServerLanguage.Text = App.ServerSetting.Find(a => a.Key == ServerSettingKeys.SpecialServerLanguage.ToString()).Value;
                chb_specialEnableMassEmail.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.SpecialEnableMassEmail.ToString()).Value);

                txt_configServerStartupPort.Value = int.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigServerStartupPort.ToString()).Value);
                txt_configWebSocketTimeoutMin.Value = int.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigWebSocketTimeoutMin.ToString()).Value);
                txt_configMaxWebSocketBufferSizeKb.Value = int.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigMaxWebSocketBufferSizeKb.ToString()).Value);
                txt_configApiTokenTimeoutMin.Value = int.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigApiTokenTimeoutMin.ToString()).Value);
                chb_configServerStartupOnHttps.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigServerStartupOnHttps.ToString()).Value);
                txt_configCertificateDomain.Text = App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigCertificateDomain.ToString()).Value;
                txt_configCertificatePassword.Password = App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigCertificatePassword.ToString()).Value;
                txt_configJwtLocalKey.Text = App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigJwtLocalKey.ToString()).Value;

                chb_serverTimeTokenValidationEnabled.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerTimeTokenValidationEnabled.ToString()).Value);
                chb_serverRazorWebPagesEngineEnabled.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerRazorWebPagesEngineEnabled.ToString()).Value);
                chb_serverEnableWebSocketMonitor.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerEnableWebSocketMonitor.ToString()).Value);
                chb_serverMvcWebPagesEngineEnabled.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerMvcWebPagesEngineEnabled.ToString()).Value);
                chb_serverWebSocketEngineEnabled.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerWebSocketEngineEnabled.ToString()).Value);
                chb_serverFtpEngineEnabled.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerFtpEngineEnabled.ToString()).Value);
                chb_serverFtpSecurityEnabled.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerFtpSecurityEnabled.ToString()).Value);
                chb_serverWebBrowserEnabled.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerWebBrowserEnabled.ToString()).Value);

                chb_moduleSwaggerApiDocEnabled.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ModuleSwaggerApiDocEnabled.ToString()).Value);
                chb_moduleDataManagerEnabled.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ModuleDataManagerEnabled.ToString()).Value);
                chb_moduleHealthServiceEnabled.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ModuleHealthServiceEnabled.ToString()).Value);

                chb_moduleMdDocumentationEnabled.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ModuleMdDocumentationEnabled.ToString()).Value);
                chb_moduleDbDiagramGeneratorEnabled.IsChecked = bool.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ModuleDbDiagramGeneratorEnabled.ToString()).Value);
                txt_moduleHealthServiceRefreshIntervalSec.Value = int.Parse(App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ModuleHealthServiceRefreshIntervalSec.ToString()).Value);

            }
            catch { }
            MainWindow.ProgressRing = Visibility.Hidden;
        }


        private async void BtnSave_Click(object sender, RoutedEventArgs e)
        {

            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.EmailerServiceEmailAddress.ToString()).Value = txt_emailerServiceEmailAddress.Text;
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.EmailerSMTPServerAddress.ToString()).Value = txt_emailerSMTPServerAddress.Text;
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.EmailerSMTPPort.ToString()).Value = txt_emailerSMTPPort.Value.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.EmailerSMTPSslIsEnabled.ToString()).Value = chb_emailerSMTPSslIsEnabled.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.EmailerSMTPLoginUsername.ToString()).Value = txt_emailerSMTPLoginUsername.Text;
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.EmailerSMTPLoginPassword.ToString()).Value = txt_emailerSMTPLoginPassword.Password;

            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.DatabaseInternalCachingEnabled.ToString()).Value = chb_databaseInternalCachingEnabled.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.DatabaseInternalCacheTimeoutMin.ToString()).Value = txt_databaseInternalCacheTimeoutMin.Value.ToString();

            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.SpecialServerServiceName.ToString()).Value = txt_specialServerServiceName.Text;
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.SpecialCoreCheckerEmailSenderActive.ToString()).Value = chb_specialCoreCheckerEmailSenderActive.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.SpecialUseDbLocalAutoupdatedDials.ToString()).Value = chb_specialUseDbLocalAutoupdatedDials.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.SpecialServerLanguage.ToString()).Value = ((Language)cb_specialServerLanguage.SelectedItem).Value;
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.SpecialEnableMassEmail.ToString()).Value = chb_specialEnableMassEmail.IsChecked.ToString();

            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigServerStartupPort.ToString()).Value = txt_configServerStartupPort.Value.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigWebSocketTimeoutMin.ToString()).Value = txt_configWebSocketTimeoutMin.Value.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigMaxWebSocketBufferSizeKb.ToString()).Value = txt_configMaxWebSocketBufferSizeKb.Value.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigApiTokenTimeoutMin.ToString()).Value = txt_configApiTokenTimeoutMin.Value.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigServerStartupOnHttps.ToString()).Value = chb_configServerStartupOnHttps.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigCertificateDomain.ToString()).Value = txt_configCertificateDomain.Text;
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigCertificatePassword.ToString()).Value = txt_configCertificatePassword.Password;
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ConfigJwtLocalKey.ToString()).Value = txt_configJwtLocalKey.Text;

            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerTimeTokenValidationEnabled.ToString()).Value = chb_serverTimeTokenValidationEnabled.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerRazorWebPagesEngineEnabled.ToString()).Value = chb_serverRazorWebPagesEngineEnabled.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerEnableWebSocketMonitor.ToString()).Value = chb_serverEnableWebSocketMonitor.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerMvcWebPagesEngineEnabled.ToString()).Value = chb_serverMvcWebPagesEngineEnabled.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerWebSocketEngineEnabled.ToString()).Value = chb_serverWebSocketEngineEnabled.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerFtpEngineEnabled.ToString()).Value = chb_serverFtpEngineEnabled.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerFtpSecurityEnabled.ToString()).Value = chb_serverFtpSecurityEnabled.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ServerWebBrowserEnabled.ToString()).Value = chb_serverWebBrowserEnabled.IsChecked.ToString();

            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ModuleSwaggerApiDocEnabled.ToString()).Value = chb_moduleSwaggerApiDocEnabled.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ModuleDataManagerEnabled.ToString()).Value = chb_moduleDataManagerEnabled.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ModuleHealthServiceEnabled.ToString()).Value = chb_moduleHealthServiceEnabled.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ModuleMdDocumentationEnabled.ToString()).Value = chb_moduleMdDocumentationEnabled.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ModuleDbDiagramGeneratorEnabled.ToString()).Value = chb_moduleDbDiagramGeneratorEnabled.IsChecked.ToString();
            App.ServerSetting.Find(a => a.Key == ServerSettingKeys.ModuleHealthServiceRefreshIntervalSec.ToString()).Value = txt_moduleHealthServiceRefreshIntervalSec.Value.ToString();


            MainWindow.ProgressRing = Visibility.Visible;
            string json = JsonConvert.SerializeObject(App.ServerSetting);
            StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
            DBResultMessage dBResult = await ApiCommunication.PostApiRequest(ApiUrls.GlobalNETServerSetting, httpContent, null, App.UserData.Authentification.Token);
            MainWindow.ProgressRing = Visibility.Hidden;

            if (dBResult.RecordCount > 0) {await MainWindow.ShowMessageOnMainWindow(false, Resources["savingSuccessfull"].ToString()); }
            else {await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
        }


        private void BtnShowApi_Click(object sender, RoutedEventArgs e) => Process.Start(App.Setting.ApiAddress + "/swagger");


        private void BtnGenerateJwtKey_Click(object sender, RoutedEventArgs e) {
            txt_configJwtLocalKey.Text = SystemOperations.RandomString(40);
        }


        private async void BtnSendTestEmail_Click(object sender, RoutedEventArgs e) {
            SystemOperations.SendMailWithServerSetting("Test Email from ShoPingER");

            DBResultMessage dBResultMessage = await ApiCommunication.GetApiRequest<DBResultMessage>(ApiUrls.ServerEmailer, "Test Email from ShoPingER API", App.UserData.Authentification.Token);
            {
                await MainWindow.ShowMessageOnMainWindow(false, dBResultMessage.ErrorMessage);
            }
        }


        private void BtnExport_Click(object sender, RoutedEventArgs e) {
            try {
                SaveFileDialog dlg = new SaveFileDialog { DefaultExt = ".json", Filter = "Config file |*.json", Title = Resources["fileOpenDescription"].ToString() };
                if (dlg.ShowDialog() == true) {

                    bool tempBool; int tempInt = 0;
                    Dictionary<string, object> exportServerSettingList = new Dictionary<string, object>();
                    App.ServerSetting.ForEach(setting => {
                        string valueType = bool.TryParse(setting.Value, out tempBool) ? "bool" : int.TryParse(setting.Value, out tempInt) ? "int" : "string";
                        exportServerSettingList.Add(setting.Key, (valueType == "bool" ? (object)tempBool : valueType == "int" ? (object)tempInt : (object)setting.Value));
                    });
                    FileOperations.WriteToFile(dlg.FileName, new JavaScriptSerializer().Serialize(exportServerSettingList)); 
                }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }


        private async void BtnRestartServer_Click(object sender, RoutedEventArgs e) {
            DBResultMessage dBResultMessage = await ApiCommunication.GetApiRequest<DBResultMessage>(ApiUrls.ServerRestart, null, App.UserData.Authentification.Token);
            {
                await MainWindow.ShowMessageOnMainWindow(false, dBResultMessage.ErrorMessage);
            }
        }

     
    }
}


```    
			
---   
			### XAML Grafy, Diagrami, Uml, Atd     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.GraphsPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:bh="http://schemas.microsoft.com/xaml/behaviors"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:iconPacks="http://metro.mahapps.com/winfx/xaml/iconpacks"
    xmlns:local="clr-namespace:GoldenSystem.Pages"
    xmlns:lvc="clr-namespace:LiveCharts.Wpf;assembly=LiveCharts.Wpf"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:xctk="http://schemas.xceed.com/wpf/xaml/toolkit"
    Name="Settings"
    HorizontalAlignment="Stretch"
    VerticalAlignment="Stretch"
    d:DesignHeight="500"
    d:DesignWidth="600"
    Foreground="White"
    Tag="Settings"
    mc:Ignorable="d">

    <Grid
        Margin="0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch">
        <Grid.Background>
            <RadialGradientBrush>
                <GradientStop Offset="0" Color="#FF313131" />
                <GradientStop Offset="1" Color="#FF181818" />
            </RadialGradientBrush>
        </Grid.Background>
        <Grid.RowDefinitions>
            <RowDefinition Height="*" />
        </Grid.RowDefinitions>
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="*" />
        </Grid.ColumnDefinitions>
        <WrapPanel
            Grid.Row="0" Grid.Column="0"
            Width="{Binding Path=ActualWidth, ElementName=Settings}"
            Height="{Binding Path=ActualHeight, ElementName=Settings}"
            HorizontalAlignment="Stretch" VerticalAlignment="Stretch">
            <DockPanel HorizontalAlignment="Stretch" VerticalAlignment="Stretch">

                <DockPanel
                    Width="500" Height="500" Margin="20">
                    <lvc:CartesianChart LegendLocation="Right" Series="{Binding SeriesCollection}">
                        <lvc:CartesianChart.AxisY>
                            <lvc:Axis Title="Sales" LabelFormatter="{Binding YFormatter}" />
                        </lvc:CartesianChart.AxisY>
                        <lvc:CartesianChart.AxisX>
                            <lvc:Axis Title="Month" Labels="{Binding Labels}" />
                        </lvc:CartesianChart.AxisX>
                    </lvc:CartesianChart>
                </DockPanel>

                <DockPanel
                    Width="500" Height="500" Margin="10">
                    <lvc:PieChart
                        DataClick="Chart_OnDataClick"
                        DataTooltip="{x:Null}"
                        Hoverable="False" LegendLocation="Bottom">
                        <lvc:PieChart.Series>
                            <lvc:PieSeries
                                Title="Maria" DataLabels="True"
                                LabelPoint="{Binding PointLabel}"
                                Values="3" />
                            <lvc:PieSeries
                                Title="Charles" DataLabels="True"
                                LabelPoint="{Binding PointLabel}"
                                Values="4" />
                            <lvc:PieSeries
                                Title="Frida" DataLabels="True"
                                LabelPoint="{Binding PointLabel}"
                                Values="6" />
                            <lvc:PieSeries
                                Title="Frederic" DataLabels="True"
                                LabelPoint="{Binding PointLabel}"
                                Values="2" />
                        </lvc:PieChart.Series>
                    </lvc:PieChart>
                </DockPanel>

                <DockPanel
                    Width="500" Height="500" Margin="10">
                    <Button Margin="10" Click="ChangeValueOnClick">Update</Button>
                    <lvc:AngularGauge
                        Grid.Row="1" FontSize="16" FontWeight="Bold" Foreground="White" FromValue="50"
                        LabelsStep="50" SectionsInnerRadius=".5" TicksForeground="White" TicksStep="25" ToValue="250"
                        Wedge="300"
                        Value="{Binding Value}">
                        <lvc:AngularGauge.Sections>
                            <lvc:AngularSection
                                Fill="#F8A725" FromValue="50" ToValue="200" />
                            <lvc:AngularSection
                                Fill="#FF3939" FromValue="200" ToValue="250" />
                        </lvc:AngularGauge.Sections>
                    </lvc:AngularGauge>
                </DockPanel>
            </DockPanel>
        </WrapPanel>
    </Grid>
</UserControl>
----------------------------------------------------------------------------------------------------------------

using GoldenSystem.Classes;
using GoldenSystem.GlobalOperations;
using LiveCharts;
using LiveCharts.Wpf;
using Newtonsoft.Json;
using System;
using System.ComponentModel;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace GoldenSystem.Pages {

    public partial class GraphsPage : UserControl, INotifyPropertyChanged {
        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static Classes.BasicCalendarList selectedRecord = new Classes.BasicCalendarList();

        public GraphsPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, JsonConvert.DeserializeObject<Language>(App.Setting.DefaultLanguage).Value);

            SeriesCollection = new SeriesCollection
            {
                new LineSeries
                {
                    Title = "Series 1",
                    Values = new ChartValues<double> { 4, 6, 5, 2 ,4 }
                },
                new LineSeries
                {
                    Title = "Series 2",
                    Values = new ChartValues<double> { 6, 7, 3, 4 ,6 },
                    PointGeometry = null
                },
                new LineSeries
                {
                    Title = "Series 3",
                    Values = new ChartValues<double> { 4,2,7,2,7 },
                    PointGeometry = DefaultGeometries.Square,
                    PointGeometrySize = 15
                }
            };

            Labels = new[] { "Jan", "Feb", "Mar", "Apr", "May" };
            YFormatter = value => value.ToString("C");

            //modifying the series collection will animate and update the chart
            SeriesCollection.Add(new LineSeries
            {
                Title = "Series 4",
                Values = new ChartValues<double> { 5, 3, 2, 4 },
                LineSmoothness = 0, //0: straight lines, 1: really smooth lines
                PointGeometry = Geometry.Parse("m 25 70.36218 20 -28 -20 22 -8 -6 z"),
                PointGeometrySize = 50,
                PointForeground = System.Windows.Media.Brushes.Gray
            });

            //modifying any series values will also animate and update the chart
            SeriesCollection[3].Values.Add(5d);

            //Second Graph
            PointLabel = chartPoint =>
              string.Format("{0} ({1:P})", chartPoint.Y, chartPoint.Participation);
            Value = 160;

            DataContext = this;
        }

        public SeriesCollection SeriesCollection { get; set; }
        public string[] Labels { get; set; }
        public Func<double, string> YFormatter { get; set; }
        private double _value;
        public Func<ChartPoint, string> PointLabel { get; set; }

        private void Chart_OnDataClick(object sender, ChartPoint chartpoint) {
            var chart = (PieChart)chartpoint.ChartView;

            //clear selected slice.
            foreach (PieSeries series in chart.Series.Cast<PieSeries>()) {
                series.PushOut = 0;
            }

            var selectedSeries = (PieSeries)chartpoint.SeriesView;
            selectedSeries.PushOut = 8;
        }

        public double Value {
            get { return _value; }
            set {
                _value = value;
                OnPropertyChanged("Value");
            }
        }

        private void ChangeValueOnClick(object sender, RoutedEventArgs e) {
            Value = new Random().Next(50, 250);
        }

        public event PropertyChangedEventHandler PropertyChanged;

        protected virtual void OnPropertyChanged(string propertyName = null) {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}
```    
			
---   
			### XAML Monitoring OS Systému     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.SystemMonitorPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:GoldenSystem="clr-namespace:GoldenSystem"
    xmlns:behaviors="http://schemas.microsoft.com/xaml/behaviors"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:lvc="clr-namespace:LiveCharts.Wpf;assembly=LiveCharts.Wpf"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:wpf="clr-namespace:CefSharp.Wpf;assembly=CefSharp.Wpf"
    Name="Settings"
    HorizontalAlignment="Stretch"
    VerticalAlignment="Stretch"
    d:DesignHeight="500"
    d:DesignWidth="600"
    Foreground="White"
    Tag="Settings"
    mc:Ignorable="d">

    <Grid
        Margin="0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch">
        <Grid.Background>
            <RadialGradientBrush>
                <GradientStop Offset="0" Color="#FF313131" />
                <GradientStop Offset="1" Color="#FF181818" />
            </RadialGradientBrush>
        </Grid.Background>
        <Grid.RowDefinitions>
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
        </Grid.RowDefinitions>
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="2*" />
            <ColumnDefinition Width="1*" />
        </Grid.ColumnDefinitions>

        <!--  SystemInfo Part  -->
        <DockPanel
            Grid.Row="0" Grid.RowSpan="2" Grid.Column="0" Width="Auto" Height="Auto"
            Margin="0,0,0,0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch" />

        <!--  Stats Part  -->
        <Grid
            Grid.Row="0" Grid.RowSpan="2" Grid.Column="1">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="1*" />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="1*" />
                <RowDefinition Height="1*" />
            </Grid.RowDefinitions>
            <DockPanel
                Grid.Row="0" Grid.Column="0" Margin="0,30,0,0">
                <Label
                    Name="_cpuLabel" Margin="5" HorizontalAlignment="Center" DockPanel.Dock="Bottom" FontFamily="Consolas"
                    FontSize="16" Foreground="White">
                    CPU
                </Label>
                <lvc:AngularGauge
                    Name="_cpuDial" Margin="20,10,20,0" LabelsStep="10"
                    TicksForeground="{DynamicResource HighlightBrush}"
                    TicksStep="5">
                    <lvc:AngularGauge.Sections>
                        <lvc:AngularSection
                            Fill="#fffafa" FromValue="0" ToValue="100" />
                    </lvc:AngularGauge.Sections>
                </lvc:AngularGauge>
            </DockPanel>
            <DockPanel Grid.Row="1" Grid.Column="0">
                <Label
                    Name="_ramLabel" Margin="5" HorizontalAlignment="Center" DockPanel.Dock="Bottom" FontFamily="Consolas"
                    FontSize="16" Foreground="White">
                    RAM
                </Label>
                <lvc:AngularGauge
                    Name="_ramDial" Margin="20,10,20,0" LabelsStep="10"
                    TicksForeground="{DynamicResource HighlightBrush}"
                    TicksStep="5">
                    <lvc:AngularGauge.Sections>
                        <lvc:AngularSection
                            Fill="#fffafa" FromValue="0" ToValue="100" />
                    </lvc:AngularGauge.Sections>
                </lvc:AngularGauge>
            </DockPanel>
        </Grid>
        <!--  Enf Of Stats Part  -->
    </Grid>
</UserControl>

----------------------------------------------------------------------------------------------------------------

using GoldenSystem.Classes;
using GoldenSystem.GlobalOperations;
using GoldenSystem.OSHelpers;
using Newtonsoft.Json;
using System;
using System.Timers;
using System.Windows;
using System.Windows.Controls;

namespace GoldenSystem.Pages {

    public partial class SystemMonitorPage : UserControl {
        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static Classes.BasicCalendarList selectedRecord = new Classes.BasicCalendarList();

        private readonly CPUUsage CPU = new CPUUsage();
        private readonly RAMUsage RAM = new RAMUsage();
        private readonly Timer _timer = new Timer();

        public SystemMonitorPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, JsonConvert.DeserializeObject<Language>(App.Setting.DefaultLanguage).Value);
            _timer.Enabled = true;
            _timer.Interval = 250;
            _timer.Elapsed += Timer_Elapsed;
            _timer.Start();
            this.Loaded += UserControl_Loaded;
        }

        private void UserControl_Loaded(object sender, RoutedEventArgs e) => Dispatcher.ShutdownStarted += Dispatcher_ShutdownStarted;

        private void Dispatcher_ShutdownStarted(object sender, EventArgs e) {
            _timer.Enabled = false;
            _timer.Stop();
            _cpuDial.Sections.Clear();
            _cpuDial.Dispatcher.DisableProcessing();
        }

        private static double Clamp(double val, double min, double max) {
            if (val < min)
                return min;
            else if (val > max)
                return max;
            return val;
        }

        private double ToGBFromMBytes(Int64 bytes) {
            return (double)bytes / 1024.0;
        }

        private void Timer_Elapsed(object sender, ElapsedEventArgs e) {
            lock (this)
            {
                CPU.Update();
                RAM.Update();
                this.Dispatcher.Invoke(() =>
                {
                    var cpuVal = Clamp(CPU.CPU, 0.0, 100.0);
                    var ramVal = Clamp(RAM.Memory, 0.0, 100.0);

                    _cpuDial.Value = cpuVal;
                    _ramDial.Value = ramVal;

                    _cpuLabel.Content = string.Format("CPU {0} %", cpuVal.ToString("N2"));
                    _ramLabel.Content = string.Format("RAM {0}/{1} GB", ToGBFromMBytes(RAM.UsedBytes).ToString("N2"), ToGBFromMBytes(RAM.TotalBytes).ToString("N2"));
                });
            }
        }


      
    }
}
```    
			
---   
			### XAML Panel Nástrojů     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.ServerToolPanelListPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:bh="http://schemas.microsoft.com/xaml/behaviors"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:iconPacks="http://metro.mahapps.com/winfx/xaml/iconpacks"
    xmlns:local="clr-namespace:GoldenSystem.Pages"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:xctk="http://schemas.xceed.com/wpf/xaml/toolkit"
    Name="View"
    HorizontalAlignment="Stretch"
    VerticalAlignment="Stretch"
    d:DesignHeight="600"
    d:DesignWidth="900"
    Foreground="White"
    Tag="View"
    mc:Ignorable="d">

    <Grid
        Margin="0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch">
        <Grid.Background>
            <RadialGradientBrush>
                <GradientStop Offset="0" Color="#FF313131" />
                <GradientStop Offset="1" Color="#FF181818" />
            </RadialGradientBrush>
        </Grid.Background>
        <Grid.RowDefinitions>
            <RowDefinition Height="*" />
        </Grid.RowDefinitions>
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="*" />
        </Grid.ColumnDefinitions>

        <ScrollViewer
            Grid.Row="0" Grid.Column="0"
            Width="{Binding ElementName=Settings, Path=ActualWidth}"
            Height="{Binding ElementName=Settings, Path=ActualHeight}"
            HorizontalAlignment="Stretch" VerticalAlignment="Stretch" HorizontalContentAlignment="Left" VerticalContentAlignment="Top" HorizontalScrollBarVisibility="Disabled"
            VerticalScrollBarVisibility="Auto">

            <TabControl
                x:Name="TabMenuList" HorizontalAlignment="Stretch" VerticalAlignment="Stretch" HorizontalContentAlignment="Left" VerticalContentAlignment="Top"
                Background="Transparent" FontSize="10" TabStripPlacement="Left" />
        </ScrollViewer>
    </Grid>
</UserControl>

----------------------------------------------------------------------------------------------------------------
using ControlzEx.Standard;
using GoldenSystem.Api;
using GoldenSystem.Classes;
using GoldenSystem.GlobalGenerators;
using GoldenSystem.GlobalOperations;
using MahApps.Metro.Controls;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;


namespace GoldenSystem.Pages {

    public partial class ServerToolPanelListPage : UserControl {
        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static ServerToolPanelDefinitionList selectedRecord = new ServerToolPanelDefinitionList();

        private List<ServerToolPanelDefinitionList> ServerToolPanelDefinitionList = new List<ServerToolPanelDefinitionList>();
        private List<SystemSvgIconList> SystemSvgIconList = new List<SystemSvgIconList>();
        private List<ServerToolTypeList> ServerToolTypeList = new List<ServerToolTypeList>();


        public ServerToolPanelListPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, JsonConvert.DeserializeObject<Language>(App.Setting.DefaultLanguage).Value);

            _ = LoadDataList();
            SetRecord(false);
        }

        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try {

                ServerToolTypeList = await CommApi.GetApiRequest<List<ServerToolTypeList>>(ApiUrls.GoldenSystemServerToolTypeList, null, App.UserData.Authentification.Token);
                ServerToolPanelDefinitionList = await CommApi.GetApiRequest<List<ServerToolPanelDefinitionList>>(ApiUrls.GoldenSystemServerToolPanelDefinitionList, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token);
                SystemSvgIconList = await CommApi.GetApiRequest<List<SystemSvgIconList>>(ApiUrls.GoldenSystemSystemSvgIconList, null, App.UserData.Authentification.Token);

                if (ServerToolTypeList.Any()) { TabMenuList.Items.Clear(); }
                ServerToolTypeList.ForEach(async toolType => {
                    try {
                        string translation = await DBOperations.DBTranslation(toolType.Name);
                        WrapPanel tabMenuPanel = new WrapPanel() { Name = "wp_" + toolType.Id.ToString(), HorizontalAlignment = HorizontalAlignment.Center, VerticalAlignment = VerticalAlignment.Center };
                        TabItem tabMenu = new TabItem() { Name = Regex.Replace(toolType.Name, @"[^a-zA-Z]", "_"), Header = translation, Content = tabMenuPanel };
                        TabMenuList.Items.Add(tabMenu);
                    } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
                });


                foreach (ServerToolPanelDefinitionList panel in ServerToolPanelDefinitionList) {
                    panel.ToolTypeName = Regex.Replace(ServerToolTypeList.FirstOrDefault(a => a.Id == panel.ToolTypeId).Name, @"[^a-zA-Z]", "_");
                    try {
                        panel.BitmapImage = IconMaker.Icon((Color)ColorConverter.ConvertFromString(panel.IconColor), SystemSvgIconList.FirstOrDefault(a => a.Name == panel.IconName).SvgIconPath);
                    } catch { }

                    var toolPanel = new Tile() {
                        Tag = panel.Id.ToString(),
                        Name = Regex.Replace(panel.SystemName, @"[^a-zA-Z]", "_"),
                        Title = await DBOperations.DBTranslation(panel.SystemName),
                        Background = (Brush)new BrushConverter().ConvertFromString(panel.BackgroundColor),
                        Width = 200,
                        Height = 200,
                        Margin = new Thickness(3),
                        HorizontalAlignment = HorizontalAlignment.Center,
                        VerticalAlignment = VerticalAlignment.Center,
                        Cursor = Cursors.Hand,
                        FontWeight = FontWeights.DemiBold,
                        HorizontalTitleAlignment = HorizontalAlignment.Left,
                        TitleFontSize = 20,
                        VerticalTitleAlignment = VerticalAlignment.Bottom,
                        ClickMode = ClickMode.Press,
                        ToolTip = (!string.IsNullOrWhiteSpace(panel.Description)) ? panel.Description : null
                        
                    };

                    Image icon = new Image() { Width = 120, Height = 120, Source = panel.BitmapImage };

                    toolPanel.Content = icon;
                    toolPanel.Click += ToolPanelListPage_Click;
                    ((WrapPanel)TabMenuList.FindChild<TabItem>(Regex.Replace(ServerToolPanelDefinitionList.Where(a => a.Id == int.Parse(toolPanel.Tag.ToString())).First().ToolTypeName, @"[^a-zA-Z]", "_")).Content).Children.Add(toolPanel);
                }

            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }

        private void ToolPanelListPage_Click(object sender, RoutedEventArgs e) {
            var selectedPanel = ServerToolPanelDefinitionList.Where(a => a.Id == int.Parse(((Tile)sender).Tag.ToString())).FirstOrDefault();
            SystemOperations.StartExternalProccess(selectedPanel.Type, (selectedPanel.Type == "EDCservice" ? App.Setting.ApiAddress : "" ) + selectedPanel.Command);
        }

        private void SetRecord(bool showForm) {
            MainWindow.DataGridSelected = MainWindow.DataGridSelectedIdListIndicator = false; MainWindow.dataGridSelectedId = 0; MainWindow.DgRefresh = false;
            dataViewSupport.FormShown = true;
        }


    }
}
```    
			
---   
			### XAML Prohlížeč Doc,PDF,Office,Obrázky,Atd     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.TemplateDocumentViewPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:behaviors="clr-namespace:GoldenSystem.Pages"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:dragablz="clr-namespace:Dragablz;assembly=Dragablz"
    xmlns:globalization="clr-namespace:System.Globalization;assembly=mscorlib"
    xmlns:i="http://schemas.microsoft.com/expression/2010/interactivity"
    xmlns:iconPacks="http://metro.mahapps.com/winfx/xaml/iconpacks"
    xmlns:local="clr-namespace:GoldenSystem"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:sys="clr-namespace:System;assembly=mscorlib"
    xmlns:wpf="clr-namespace:CefSharp.Wpf;assembly=CefSharp.Wpf"
    xmlns:xctk="http://schemas.xceed.com/wpf/xaml/toolkit"
    Name="Setting"
    HorizontalAlignment="Stretch"
    VerticalAlignment="Stretch"
    d:DesignHeight="500"
    d:DesignWidth="600"
    Tag="Setting"
    mc:Ignorable="d">

    <!--  Standartized Full Page Grid  -->
    <Grid
        Margin="0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch"
        Background="{DynamicResource AccentColorBrush}">

        <!--  Limited for installed XPS support  -->
        <!--<DocumentViewer x:Name="dv_documentViewer" Width="{Binding Path=ActualWidth, ElementName=View}" Height="{Binding Path=ActualHeight, ElementName=View}" />-->
        <wpf:ChromiumWebBrowser
            x:Name="webViewer"
            Width="{Binding Path=ActualWidth, ElementName=View}"
            Height="{Binding Path=ActualHeight, ElementName=View}" />
    </Grid>
</UserControl>

----------------------------------------------------------------------------------------------------------------

using GoldenSystem.Classes;
using GoldenSystem.GlobalOperations;
using Newtonsoft.Json;
using System.IO;
using System.Windows.Controls;

namespace GoldenSystem.Pages {

    /// <summary>
    /// Template Page For View document, pictures, text and and much more file formats opened in WebViewer
    /// </summary>
    public partial class TemplateDocumentViewPage : UserControl {

        /// <summary>
        /// Standartized declaring static page data for global vorking with pages
        /// </summary>
        public static DataViewSupport dataViewSupport = new DataViewSupport();

        public static TemplateClassList selectedRecord = new TemplateClassList();

        /// <summary>
        /// Initialize page with loading Dictionary and direct show example file
        /// </summary>
        public TemplateDocumentViewPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, JsonConvert.DeserializeObject<Language>(App.Setting.DefaultLanguage).Value);
            webViewer.Address = Path.Combine(App.startupPath, "Data", "xpsDocument.xps");
            //dv_docuentViewer.Document = new XpsDocument(Path.Combine(App.startupPath, "Data", "xpsDocument.xps"), FileAccess.Read).GetFixedDocumentSequence();
        }
    }
}
```    
			
---   
			### XAML Přehled a Formulář s Lokálním Překladem     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.TemplateClassListPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:local="clr-namespace:GoldenSystem.Pages"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:xctk="http://schemas.xceed.com/wpf/xaml/toolkit"
    Name="Form"
    HorizontalAlignment="Stretch"
    VerticalAlignment="Stretch"
    d:DesignHeight="500"
    d:DesignWidth="600"
    Tag="Form"
    mc:Ignorable="d">

    <Grid
        Margin="0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch"
        Background="{DynamicResource AccentColorBrush}">
        <Grid x:Name="ListView" Visibility="Visible">
            <DataGrid
                x:Name="DgListView"
                Width="{Binding Path=ActualWidth, ElementName=Form}"
                Height="{Binding Path=ActualHeight, ElementName=Form}"
                HorizontalAlignment="Left" VerticalAlignment="Top" AutoGenerateColumns="True" AutoGeneratedColumns="DgListView_Translate" IsReadOnly="True"
                MouseDoubleClick="DgListView_MouseDoubleClick" SelectionChanged="DgListView_SelectionChanged" SelectionMode="Single" />
        </Grid>

        <Grid
            x:Name="ListForm"
            Background="{DynamicResource WhiteBrush}"
            Visibility="Visible">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="300" />
                <ColumnDefinition Width="*" />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="80" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="*" />
                <RowDefinition Height="110" />
            </Grid.RowDefinitions>

            <Label
                x:Name="lbl_id" Grid.Row="0" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <Controls:NumericUpDown
                x:Name="txt_id" Grid.Row="0" Grid.Column="1" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                Controls:TextBoxHelper.ClearTextButton="False" Controls:TextBoxHelper.Watermark="" HideUpDownButtons="True" IsEnabled="False" ToolTip="This unique identificator is read only value which is filled automatically by system" />

            <Label
                x:Name="lbl_systemName" Grid.Row="1" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <TextBox
                x:Name="txt_systemName" Grid.Row="1" Grid.Column="1" Margin="0,2,0,2" Controls:TextBoxHelper.ClearTextButton="true"
                Controls:TextBoxHelper.IsWaitingForData="True" Controls:TextBoxHelper.Watermark="" ToolTip="" />

            <Label
                x:Name="lbl_description" Grid.Row="2" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <TextBox
                x:Name="txt_description" Grid.Row="2" Grid.Column="1" Margin="0,2,0,2" Controls:TextBoxHelper.ClearTextButton="True"
                Controls:TextBoxHelper.Watermark="" AcceptsReturn="True" TextWrapping="Wrap" VerticalScrollBarVisibility="Visible" />

            <Label
                x:Name="lbl_active" Grid.Row="3" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <CheckBox
                x:Name="chb_active" Grid.Row="3" Grid.Column="1" VerticalAlignment="Center" />

            <Button
                Name="btn_save" Grid.Row="5" Grid.Column="0" Width="200" Height="40"
                Margin="44,21,0,44" HorizontalAlignment="Left" VerticalAlignment="Bottom" Click="BtnSave_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />
            <Button
                Name="btn_cancel" Grid.Row="5" Grid.Column="1" Width="200" Height="40"
                Margin="44,21,44,44" HorizontalAlignment="Right" VerticalAlignment="Bottom" Click="BtnCancel_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />
        </Grid>
    </Grid>
</UserControl>

----------------------------------------------------------------------------------------------------------------

using GoldenSystem.Api;
using GoldenSystem.Classes;
using GoldenSystem.GlobalOperations;
using GoldenSystem.GlobalStyles;
using MahApps.Metro.Controls.Dialogs;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace GoldenSystem.Pages {

    public partial class TemplateClassListPage : UserControl {

        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static TemplateClassList selectedRecord = new TemplateClassList();


        public TemplateClassListPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, JsonConvert.DeserializeObject<Language>(App.Setting.DefaultLanguage).Value);

            try {
                lbl_id.Content = Resources["id"].ToString();
                lbl_systemName.Content = Resources["systemName"].ToString();
                lbl_description.Content = Resources["description"].ToString();
                lbl_active.Content = Resources["active"].ToString();
                btn_save.Content = Resources["btn_save"].ToString();
                btn_cancel.Content = Resources["btn_cancel"].ToString();
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            _ = LoadDataList();
            SetRecord(false);
        }


        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try { 

                DgListView.ItemsSource = await CommApi.GetApiRequest<List<TemplateClassList>>(ApiUrls.GoldenSystemTemplateClassList, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token); 
            
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }


        private void DgListView_Translate(object sender, EventArgs ex) {
            try {
                ((DataGrid)sender).Columns.ToList().ForEach(e => {
                    string headername = e.Header.ToString();
                    if (headername == "SystemName") e.Header = Resources["systemName"].ToString();
                    else if (headername == "Description") e.Header = Resources["description"].ToString();
                    else if (headername == "Active") { e.Header = Resources["active"].ToString(); e.CellStyle = DatagridStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 2; }
                    else if (headername == "Timestamp") { e.Header = Resources["timestamp"].ToString(); e.CellStyle = DatagridStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 1; }
                    else if (headername == "Id") e.DisplayIndex = 0;
                    else if (headername == "UserId") e.Visibility = Visibility.Hidden;
                });
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }


        public void Filter(string filter) {
            try {
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) => {
                    TemplateClassList user = e as TemplateClassList;
                    return user.SystemName.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(user.Description) && user.Description.ToLower().Contains(filter.ToLower());
                };
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }


        public void NewRecord() {
            selectedRecord = new TemplateClassList();
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }


        public void EditRecord(bool copy) {
            selectedRecord = (TemplateClassList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }


        public async void DeleteRecord() {
            selectedRecord = (TemplateClassList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + selectedRecord.Id.ToString(), true);
            if (result == MessageDialogResult.Affirmative) {
                DBResultMessage dBResult = await CommApi.DeleteApiRequest(ApiUrls.GoldenSystemTemplateClassList, selectedRecord.Id.ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage);
                await LoadDataList(); SetRecord(false);
            }
        }


        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            if (DgListView.SelectedItems.Count == 0) return;
            selectedRecord = (TemplateClassList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }


        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0) { selectedRecord = (TemplateClassList)DgListView.SelectedItem; }
            else { selectedRecord = new TemplateClassList(); }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(false);
        }


        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            try {
                DBResultMessage dBResult;
                selectedRecord.Id = (int)((txt_id.Value != null) ? txt_id.Value : 0);
                selectedRecord.SystemName = txt_systemName.Text;
                selectedRecord.Description = txt_description.Text;
                selectedRecord.UserId = App.UserData.Authentification.Id;
                selectedRecord.Active = (bool)chb_active.IsChecked;
                selectedRecord.TimeStamp = DateTimeOffset.Now.DateTime;

                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0) {
                    dBResult = await CommApi.PutApiRequest(ApiUrls.GoldenSystemTemplateClassList, httpContent, null, App.UserData.Authentification.Token);
                }
                else { dBResult = await CommApi.PostApiRequest(ApiUrls.GoldenSystemTemplateClassList, httpContent, null, App.UserData.Authentification.Token); }

                if (dBResult.RecordCount > 0) {
                    selectedRecord = new TemplateClassList();
                    await LoadDataList();
                    SetRecord(false);
                }
                else { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }


        private void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (TemplateClassList)DgListView.SelectedItem : new TemplateClassList();
            SetRecord(false);
        }


        private void SetRecord(bool showForm, bool copy = false) {
            txt_id.Value = (copy) ? 0 : selectedRecord.Id;
            txt_systemName.Text = selectedRecord.SystemName;
            txt_description.Text = selectedRecord.Description;
            chb_active.IsChecked = (selectedRecord.Id == 0) ? App.Setting.ActiveNewInputDefault : selectedRecord.Active;

            if (showForm) {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = false;
                ListView.Visibility = Visibility.Hidden; ListForm.Visibility = Visibility.Visible; dataViewSupport.FormShown = true;
            }
            else {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = true;
                ListForm.Visibility = Visibility.Hidden; ListView.Visibility = Visibility.Visible; dataViewSupport.FormShown = false;
            }
        }
    }
}
```    
			
---   
			### XAML Přehled a Formulář s Vazbou     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.TemplateClassListAutoDBTranslationWithParentPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:local="clr-namespace:GoldenSystem.Pages"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:xctk="http://schemas.xceed.com/wpf/xaml/toolkit"
    Name="Form"
    HorizontalAlignment="Stretch"
    VerticalAlignment="Stretch"
    d:DesignHeight="500"
    d:DesignWidth="600"
    Tag="Form"
    mc:Ignorable="d">

    <Grid
        Margin="0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch"
        Background="{DynamicResource AccentColorBrush}">
        <Grid x:Name="ListView" Visibility="Visible">
            <DataGrid
                x:Name="DgListView"
                Width="{Binding Path=ActualWidth, ElementName=Form}"
                Height="{Binding Path=ActualHeight, ElementName=Form}"
                HorizontalAlignment="Left" VerticalAlignment="Top" AutoGenerateColumns="True" AutoGeneratedColumns="DgListView_Translate" IsReadOnly="True"
                MouseDoubleClick="DgListView_MouseDoubleClick" SelectionChanged="DgListView_SelectionChanged" SelectionMode="Single" />
        </Grid>

        <Grid
            x:Name="ListForm"
            Background="{DynamicResource WhiteBrush}"
            Visibility="Visible">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="300" />
                <ColumnDefinition Width="*" />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="80" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="*" />
                <RowDefinition Height="110" />
            </Grid.RowDefinitions>

            <Label
                x:Name="lbl_id" Grid.Row="0" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <Controls:NumericUpDown
                x:Name="txt_id" Grid.Row="0" Grid.Column="1" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                Controls:TextBoxHelper.ClearTextButton="False" Controls:TextBoxHelper.Watermark="" HideUpDownButtons="True" IsEnabled="False" ToolTip="This unique identificator is read only value which is filled automatically by system" />

            <Label
                x:Name="lbl_systemName" Grid.Row="1" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <TextBox
                x:Name="txt_systemName" Grid.Row="1" Grid.Column="1" Margin="0,2,0,2" Controls:TextBoxHelper.ClearTextButton="true"
                Controls:TextBoxHelper.IsWaitingForData="True" Controls:TextBoxHelper.Watermark="" ToolTip="" />

            <Label
                x:Name="lbl_parentId" Grid.Row="2" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <ComboBox
                x:Name="cb_parentId" Grid.Row="2" Grid.Column="1" Margin="0,2,0,2" HorizontalAlignment="Stretch"
                VerticalAlignment="Center" Controls:TextBoxHelper.ClearTextButton="false" Controls:TextBoxHelper.IsWaitingForData="True" DisplayMemberPath="ParentName" IsEnabled="true"
                SelectedValuePath="Id" />

            <Label
                x:Name="lbl_description" Grid.Row="3" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <TextBox
                x:Name="txt_description" Grid.Row="3" Grid.Column="1" Margin="0,2,0,2" Controls:TextBoxHelper.ClearTextButton="True"
                Controls:TextBoxHelper.Watermark="" AcceptsReturn="True" TextWrapping="Wrap" VerticalScrollBarVisibility="Visible" />

            <Label
                x:Name="lbl_active" Grid.Row="4" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <CheckBox
                x:Name="chb_active" Grid.Row="4" Grid.Column="1" VerticalAlignment="Center" />

            <Button
                Name="btn_save" Grid.Row="10" Grid.Column="0" Width="200" Height="40"
                Margin="44,21,0,44" HorizontalAlignment="Left" VerticalAlignment="Bottom" Click="BtnSave_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />
            <Button
                Name="btn_cancel" Grid.Row="10" Grid.Column="1" Width="200" Height="40"
                Margin="44,21,44,44" HorizontalAlignment="Right" VerticalAlignment="Bottom" Click="BtnCancel_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />
        </Grid>
    </Grid>
</UserControl>

----------------------------------------------------------------------------------------------------------------

using GoldenSystem.Api;
using GoldenSystem.Classes;
using GoldenSystem.GlobalOperations;
using GoldenSystem.GlobalStyles;
using MahApps.Metro.Controls.Dialogs;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace GoldenSystem.Pages {

    public partial class TemplateClassListAutoDBTranslationWithParentPage : UserControl {

        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static TemplateClassListWithParrent selectedRecord = new TemplateClassListWithParrent();

        private List<TemplateClassListWithParrent> TemplateClassListWithParrent = new List<TemplateClassListWithParrent>();
        private List<GlobalUserRoleList> parentClassList = new List<GlobalUserRoleList>();

        public TemplateClassListAutoDBTranslationWithParentPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, JsonConvert.DeserializeObject<Language>(App.Setting.DefaultLanguage).Value);

            try {
                DataOperations.TranslateFormFields(ref ListForm);
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            _ = LoadDataList();
            SetRecord(false);
        }


        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try {

                TemplateClassListWithParrent = await CommApi.GetApiRequest<List<TemplateClassListWithParrent>>(ApiUrls.GoldenSystemTemplateClassListWithParrent, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token);
                parentClassList = await CommApi.GetApiRequest<List<GlobalUserRoleList>>(ApiUrls.GoldenSystemGlobalUserRoleList, null, App.UserData.Authentification.Token);

                TemplateClassListWithParrent.ForEach(async user => { user.ParentName = await DBOperations.DBTranslation(parentClassList.First(a => a.Id == user.ParentId).SystemName); });
                parentClassList.ForEach(async role => { role.Translation = await DBOperations.DBTranslation(role.SystemName); });


                DgListView.ItemsSource = TemplateClassListWithParrent;
                DgListView.Items.Refresh();
                cb_parentId.ItemsSource = parentClassList;

            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }


        private async void DgListView_Translate(object sender, EventArgs ex) {
            try {
                ((DataGrid)sender).Columns.ToList().ForEach(async e => {
                    string headername = e.Header.ToString();
                    if (headername == "SystemName") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 1; }
                    else if (headername == "ParentName") { e.Header = await DBOperations.DBTranslation("role"); e.DisplayIndex = 2; }
                    else if (headername == "Description") e.Header = await DBOperations.DBTranslation(headername);

                    else if (headername == "Active") { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = DatagridStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 2; }
                    else if (headername == "Timestamp") { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = DatagridStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 1; }

                    else if (headername == "Id") e.DisplayIndex = 0;
                    else if (headername == "UserId") e.Visibility = Visibility.Hidden;
                });
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }


        public void Filter(string filter) {
            try {
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) => {
                    TemplateClassListWithParrent user = e as TemplateClassListWithParrent;
                    return user.SystemName.ToLower().Contains(filter.ToLower())
                    || user.ParentName.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(user.Description) && user.Description.ToLower().Contains(filter.ToLower());
                };
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }


        public void NewRecord() {
            selectedRecord = new TemplateClassListWithParrent();
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }


        public void EditRecord(bool copy) {
            selectedRecord = (TemplateClassListWithParrent)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }


        public async void DeleteRecord() {
            selectedRecord = (TemplateClassListWithParrent)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + selectedRecord.Id.ToString(), true);
            if (result == MessageDialogResult.Affirmative) {
                DBResultMessage dBResult = await CommApi.DeleteApiRequest(ApiUrls.GoldenSystemTemplateClassListWithParrent, selectedRecord.Id.ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage);
                await LoadDataList(); SetRecord(false);
            }
        }


        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            if (DgListView.SelectedItems.Count == 0) return;
            selectedRecord = (TemplateClassListWithParrent)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }


        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0) { selectedRecord = (TemplateClassListWithParrent)DgListView.SelectedItem; }
            else { selectedRecord = new TemplateClassListWithParrent(); }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(false);
        }


        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            try {
                DBResultMessage dBResult;
                selectedRecord.Id = (int)((txt_id.Value != null) ? txt_id.Value : 0);
                selectedRecord.ParentId = ((GlobalUserRoleList)cb_parentId.SelectedItem).Id;
                selectedRecord.SystemName = txt_systemName.Text;
                selectedRecord.Description = txt_description.Text;
                selectedRecord.UserId = App.UserData.Authentification.Id;
                selectedRecord.Active = (bool)chb_active.IsChecked;
                selectedRecord.TimeStamp = DateTimeOffset.Now.DateTime;

                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0) {
                    dBResult = await CommApi.PutApiRequest(ApiUrls.GoldenSystemTemplateClassListWithParrent, httpContent, null, App.UserData.Authentification.Token);
                }
                else { dBResult = await CommApi.PostApiRequest(ApiUrls.GoldenSystemTemplateClassListWithParrent, httpContent, null, App.UserData.Authentification.Token); }

                if (dBResult.RecordCount > 0) {
                    selectedRecord = new TemplateClassListWithParrent();
                    await LoadDataList();
                    SetRecord(false);
                }
                else { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }


        private void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (TemplateClassListWithParrent)DgListView.SelectedItem : new TemplateClassListWithParrent();
            SetRecord(false);
        }


        private void SetRecord(bool showForm, bool copy = false) {

            txt_id.Value = (copy) ? 0 : selectedRecord.Id;
            cb_parentId.SelectedItem = (selectedRecord.Id == 0) ? parentClassList.FirstOrDefault() : parentClassList.First(a => a.Id == selectedRecord.ParentId);
            txt_systemName.Text = selectedRecord.SystemName;
            txt_description.Text = selectedRecord.Description;
            chb_active.IsChecked = (selectedRecord.Id == 0) ? App.Setting.ActiveNewInputDefault : selectedRecord.Active;

            if (showForm) {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = false;
                ListView.Visibility = Visibility.Hidden; ListForm.Visibility = Visibility.Visible; dataViewSupport.FormShown = true;
            }
            else {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = true;
                ListForm.Visibility = Visibility.Hidden; ListView.Visibility = Visibility.Visible; dataViewSupport.FormShown = false;
            }
        }
    }
}

```    
			
---   
			### XAML Přehled a Formulář se SubFormem     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.TemplateClassListAutoDBTranslationWithSubPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:local="clr-namespace:GoldenSystem.Pages"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:xctk="http://schemas.xceed.com/wpf/xaml/toolkit"
    Name="Form"
    HorizontalAlignment="Stretch"
    VerticalAlignment="Stretch"
    d:DesignHeight="500"
    d:DesignWidth="600"
    Tag="Form"
    mc:Ignorable="d">

    <Grid
        Margin="0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch"
        Background="{DynamicResource AccentColorBrush}">
        <Grid x:Name="ListView" Visibility="Visible">
            <DataGrid
                x:Name="DgListView"
                Width="{Binding Path=ActualWidth, ElementName=Form}"
                Height="{Binding Path=ActualHeight, ElementName=Form}"
                HorizontalAlignment="Left" VerticalAlignment="Top" AutoGenerateColumns="True" AutoGeneratedColumns="DgListView_Translate" IsReadOnly="True"
                MouseDoubleClick="DgListView_MouseDoubleClick" SelectionChanged="DgListView_SelectionChanged" SelectionMode="Single" />
        </Grid>

        <Grid
            x:Name="ListForm"
            Background="{DynamicResource WhiteBrush}"
            Visibility="Visible">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="Auto" />
                <RowDefinition Height="150" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="110" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="30" />
                <RowDefinition Height="*" />
                <RowDefinition Height="110" />
            </Grid.RowDefinitions>

            <Label
                x:Name="lbl_documentNumber" Grid.Row="0" Grid.Column="1" Margin="0,2,205,2" HorizontalAlignment="Right"
                HorizontalContentAlignment="Right" />
            <TextBox
                x:Name="txt_documentNumber" Grid.Row="0" Grid.Column="1" Width="200" Margin="0,2,0,2"
                HorizontalAlignment="Right" HorizontalContentAlignment="Right" Controls:TextBoxHelper.ClearTextButton="False" Controls:TextBoxHelper.Watermark="" IsEnabled="False" />

            <Label
                x:Name="lbl_supplier" Grid.Row="1" Grid.Column="0" HorizontalAlignment="Left" VerticalAlignment="Top" />
            <TextBox
                x:Name="txt_supplier" Grid.Row="1" Grid.Column="0" Margin="0,30,0,2" Controls:TextBoxHelper.ClearTextButton="True"
                Controls:TextBoxHelper.Watermark="" AcceptsReturn="True" TextWrapping="Wrap" VerticalScrollBarVisibility="Auto" />

            <Label
                x:Name="lbl_customer" Grid.Row="1" Grid.Column="1" Margin="0,2,205,2" HorizontalAlignment="Left"
                VerticalAlignment="Top" />
            <TextBox
                x:Name="txt_customerFilter" Grid.Row="1" Grid.Column="1" Width="200" Margin="200,2,0,2"
                HorizontalAlignment="Right" VerticalAlignment="Top" HorizontalContentAlignment="Right" Controls:TextBoxHelper.ClearTextButton="True" GotFocus="SelectGotFocus"
                PreviewKeyDown="Customer_KeyDown" TextChanged="SelectGotFocus" />

            <TextBox
                x:Name="txt_customer" Grid.Row="1" Grid.Column="1" Margin="0,30,0,2" Controls:TextBoxHelper.ClearTextButton="True"
                Controls:TextBoxHelper.Watermark="" AcceptsReturn="True" TextWrapping="Wrap" VerticalScrollBarVisibility="Auto" />

            <Label
                x:Name="lbl_offerValidity" Grid.Row="2" Grid.Column="0" Margin="0,2,100,2" HorizontalAlignment="Stretch" />
            <Controls:NumericUpDown
                x:Name="txt_offerValidity" Grid.Row="2" Grid.Column="0" Width="100" Margin="100,2,0,2"
                HorizontalAlignment="Right" Controls:TextBoxHelper.ClearTextButton="False" Controls:TextBoxHelper.Watermark="30" HideUpDownButtons="False" />

            <Label
                x:Name="lbl_storned" Grid.Row="2" Grid.Column="1" Margin="0,2,100,2" HorizontalAlignment="Stretch" />
            <CheckBox
                x:Name="chb_storned" Grid.Row="2" Grid.Column="1" Margin="100,2,0,2" HorizontalAlignment="Right" />

            <Label
                x:Name="lbl_totalCurrency" Grid.Row="3" Grid.Column="0" Margin="0,2,100,2" HorizontalAlignment="Stretch" />
            <ComboBox
                x:Name="cb_totalCurrency" Grid.Row="3" Grid.Column="0" Width="100" Margin="100,2,0,2"
                HorizontalAlignment="Right" Controls:TextBoxHelper.ClearTextButton="false" Controls:TextBoxHelper.IsWaitingForData="True" DisplayMemberPath="Name" SelectedValuePath="Id"
                SelectionChanged="VatChanged" />

            <Label
                x:Name="lbl_totalPrice" Grid.Row="3" Grid.Column="1" Margin="0,2,100,2" HorizontalAlignment="Stretch" />
            <TextBox
                x:Name="txt_totalPrice" Grid.Row="3" Grid.Column="1" Width="100" Margin="100,2,0,2"
                HorizontalAlignment="Right" HorizontalContentAlignment="Right" Controls:TextBoxHelper.ClearTextButton="False" IsReadOnly="True" />

            <Label
                x:Name="lbl_description" Grid.Row="4" Grid.Column="0" Grid.ColumnSpan="2" HorizontalAlignment="Left" />
            <TextBox
                x:Name="txt_description" Grid.Row="4" Grid.Column="0" Grid.ColumnSpan="2" Margin="0,30,0,2"
                Controls:TextBoxHelper.ClearTextButton="True" Controls:TextBoxHelper.Watermark="" AcceptsReturn="True" TextWrapping="Wrap" VerticalScrollBarVisibility="Visible" />
            <ComboBox
                x:Name="cb_notes" Grid.Row="4" Grid.Column="1" Width="200" Margin="100,2,0,2"
                HorizontalAlignment="Right" VerticalAlignment="Top" Controls:TextBoxHelper.ClearTextButton="false" Controls:TextBoxHelper.IsWaitingForData="True" Controls:TextBoxHelper.Watermark="Note Template"
                DisplayMemberPath="Name" SelectedValuePath="Id" SelectionChanged="NotesChanged" />

            <!--  SubItems  -->
            <Grid
                x:Name="SubListView" Grid.Row="9" Grid.Column="0" Grid.ColumnSpan="2" HorizontalAlignment="Stretch"
                VerticalAlignment="Stretch" Visibility="Visible">
                <Grid.ColumnDefinitions>
                    <ColumnDefinition Width="*" />
                    <ColumnDefinition Width="105" />
                </Grid.ColumnDefinitions>
                <Grid.RowDefinitions>
                    <RowDefinition Height="Auto" />
                    <RowDefinition Height="10" />
                    <RowDefinition Height="*" />
                </Grid.RowDefinitions>

                <!--  Insert Line  -->
                <TextBox
                    x:Name="txt_partNumber" Grid.Row="0" Grid.Column="0" Width="180" Margin="0,2,0,2"
                    HorizontalAlignment="Left" Controls:TextBoxHelper.ClearTextButton="True" Controls:TextBoxHelper.Watermark="PartNumber" GotFocus="PartNumberGotFocus" PreviewKeyDown="PartNumber_KeyDown"
                    TextChanged="PartNumberGotFocus" />
                <TextBox
                    x:Name="txt_name" Grid.Row="0" Grid.Column="0" Width="200" Margin="185,2,0,2"
                    HorizontalAlignment="Left" Controls:TextBoxHelper.ClearTextButton="True" Controls:TextBoxHelper.Watermark="Name" GotFocus="NameGotFocus" />
                <ComboBox
                    x:Name="cb_unit" Grid.Row="0" Grid.Column="0" Width="100" Margin="390,2,0,2"
                    HorizontalAlignment="Left" Controls:TextBoxHelper.ClearTextButton="false" Controls:TextBoxHelper.IsWaitingForData="True" Controls:TextBoxHelper.Watermark="Unit" DisplayMemberPath="Name"
                    IsEnabled="true" SelectedValuePath="Name" />
                <Controls:NumericUpDown
                    x:Name="txt_pcsPrice" Grid.Row="0" Grid.Column="0" Width="100" Margin="495,2,0,2"
                    HorizontalAlignment="Left" Controls:TextBoxHelper.ClearTextButton="False" Controls:TextBoxHelper.Watermark="Pcs Price" HideUpDownButtons="True" NumericInputMode="Decimal" />
                <Controls:NumericUpDown
                    x:Name="txt_count" Grid.Row="0" Grid.Column="0" Width="100" Margin="600,2,0,2"
                    HorizontalAlignment="Left" Controls:TextBoxHelper.ClearTextButton="False" Controls:TextBoxHelper.Watermark="Count" HideUpDownButtons="True" NumericInputMode="Decimal"
                    ValueChanged="CountChanged" />
                <ComboBox
                    x:Name="cb_vat" Grid.Row="0" Grid.Column="0" Width="100" Margin="705,2,0,2"
                    HorizontalAlignment="Left" Controls:TextBoxHelper.ClearTextButton="false" Controls:TextBoxHelper.IsWaitingForData="True" Controls:TextBoxHelper.Watermark="Vat" DisplayMemberPath="Name"
                    IsEnabled="true" SelectedValuePath="Name" SelectionChanged="VatChanged" />
                <TextBox
                    x:Name="txt_totalPriceWithVat" Grid.Row="0" Grid.Column="0" Width="100" Margin="810,2,0,2"
                    HorizontalAlignment="Left" HorizontalContentAlignment="Right" Controls:TextBoxHelper.ClearTextButton="False" Controls:TextBoxHelper.Watermark="Total Vat Price " IsEnabled="False" />

                <!--  SubGrid Buttons  -->
                <Button
                    Name="btn_insert" Grid.Row="0" Grid.Column="1" Width="100" Height="30"
                    Margin="5,0,0,0" HorizontalAlignment="Left" VerticalAlignment="Top" Click="BtnItemInsert_Click" IsEnabled="False"
                    Style="{DynamicResource AccentedSquareButtonStyle}" />

                <Button
                    Name="btn_delete" Grid.Row="2" Grid.Column="1" Width="100" Height="30"
                    Margin="5,24,0,0" HorizontalAlignment="Left" VerticalAlignment="Top" Click="BtnItemDelete_Click" IsEnabled="False"
                    Style="{DynamicResource AccentedSquareButtonStyle}" />

                <DataGrid
                    x:Name="DgSubListView" Grid.Row="2" Grid.Column="0" HorizontalAlignment="Stretch" VerticalAlignment="Top"
                    HorizontalContentAlignment="Stretch" AutoGenerateColumns="True" AutoGeneratedColumns="DgSubListView_Translate" HorizontalScrollBarVisibility="Auto" IsReadOnly="True"
                    SelectionChanged="dgSubListView_SelectionChanged" SelectionMode="Extended" VerticalScrollBarVisibility="Auto" />

                <!--  Search views  -->
                <ListView
                    x:Name="lv_partNumberSearchResults" Grid.Row="0" Grid.RowSpan="3" Grid.Column="0" Width="200"
                    Margin="0,27,0,5" HorizontalAlignment="Left" BorderBrush="Black" BorderThickness="2" DisplayMemberPath="PartNumber"
                    IsTabStop="True" MouseDoubleClick="MouseSelectPartNumber_Click" PreviewKeyDown="SelectPartNumber_Enter" ScrollViewer.VerticalScrollBarVisibility="Auto" SelectedValuePath="PartNumber"
                    Visibility="Hidden" />
            </Grid>

            <!--  Search views  -->
            <ListView
                x:Name="lv_customerSearchResults" Grid.Row="1" Grid.RowSpan="9" Grid.Column="1" Width="200"
                Margin="0,27,0,5" HorizontalAlignment="Right" BorderBrush="Black" BorderThickness="2" DisplayMemberPath="CompanyName"
                IsTabStop="True" MouseDoubleClick="MouseSelectCustomer_Click" PreviewKeyDown="SelectCustomer_Enter" ScrollViewer.VerticalScrollBarVisibility="Auto" SelectedValuePath="Id"
                Visibility="Hidden" />

            <Button
                Name="btn_save" Grid.Row="10" Grid.Column="0" Width="200" Height="40"
                Margin="44,21,0,44" HorizontalAlignment="Left" VerticalAlignment="Bottom" Click="BtnSave_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />
            <Button
                Name="btn_cancel" Grid.Row="10" Grid.Column="1" Width="200" Height="40"
                Margin="44,21,44,44" HorizontalAlignment="Right" VerticalAlignment="Bottom" Click="BtnCancel_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />
        </Grid>
    </Grid>
</UserControl>

----------------------------------------------------------------------------------------------------------------

using GoldenSystem.Api;
using GoldenSystem.Classes;
using GoldenSystem.GlobalClasses;
using GoldenSystem.GlobalOperations;
using GoldenSystem.GlobalStyles;
using MahApps.Metro.Controls.Dialogs;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

// This is Template Page ListView + UserForm + Full SubListView And Inserting SubItems
namespace GoldenSystem.Pages {

    /// <summary>
    /// This standartized Template is only for list view od Data table
    /// Called from MainWindow.cs on open New Tab
    /// </summary>
    public partial class TemplateClassListAutoDBTranslationWithSubPage : UserControl {

        /// <summary>
        /// Standartized declaring static page data and selected record for All Pages
        /// this method is for global working with pages Called from MainWindow.cs for Control of Button Menu and Selections (Report,Filter and more)
        /// All is setted as global Classes for All Pages and Work is Fully automatized by System core
        ///
        /// HERE you Define All Data Variables For This Form
        /// </summary>
        public static DataViewSupport dataViewSupport = new DataViewSupport();

        public static ExtendedOfferList selectedRecord = new ExtendedOfferList();

        private SystemDocumentAdviceList DocumentAdviceList = new SystemDocumentAdviceList();
        private List<BasicCurrencyList> CurrencyList = new List<BasicCurrencyList>();
        private string Supplier = null; private string Customer = null;
        private List<BusinessAddressList> AddressList = new List<BusinessAddressList>();
        private string LastCustomerCorrectSearch, LastPartNumberCorrectSearch = ""; private bool messageShown = false;

        private List<DocumentItemList> DocumentItemList = new List<DocumentItemList>();
        private List<BasicItemList> ItemList = new List<BasicItemList>();
        private List<BasicVatList> VatList = new List<BasicVatList>();
        private List<BusinessNotesList> NotesList = new List<BusinessNotesList>();
        private List<BasicUnitList> UnitList = new List<BasicUnitList>();
        private string itemVatPriceFormat = "N2"; private string documentVatPriceFormat = "N0";

        /// <summary>
        /// Initialize page with loading Dictionary and start loding data
        /// Manual work needed Translate All XAML fields by Resources
        /// Runned on start
        ///
        /// </summary>
        public TemplateClassListAutoDBTranslationWithSubPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, JsonConvert.DeserializeObject<Language>(App.Setting.DefaultLanguage).Value);

            try {
                DataOperations.TranslateFormFields(ref ListForm);
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            LoadParameters();
            _ = LoadDataList();
            SetRecord(false);
        }

        private async void LoadParameters() {
            itemVatPriceFormat = await DataOperations.ParameterCheck("ItemVatPriceFormat");
            documentVatPriceFormat = await DataOperations.ParameterCheck("DocumentVatPriceFormat");
            DgListView.RowHeight = int.Parse(await DataOperations.ParameterCheck("DocumentRowHeight"));
        }

        /// <summary>
        /// Standartized Method for Loading data.
        /// Manual Changing is needed for simple form is All changed By CLASNAME Chage, but If you need More API data for selection Here are Defined All incoming Data
        /// Loading is same centralized only change ClasName For Diferent Dataset
        ///
        /// After all data for DatagridView (List Data) are loaded The ProgressRing is hidden
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working with pages Called from MainWindow.cs on Refresh button click
        /// Runned on Pageloading or Filter or View Change
        /// </summary>
        /// <returns></returns>
        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            List<BusinessOfferList> offerList = new List<BusinessOfferList>();
            List<BusinessExchangeRateList> exchangeRateList = new List<BusinessExchangeRateList>();
            List<ExtendedOfferList> extendedOfferList = new List<ExtendedOfferList>();
            BusinessBranchList defaultAddress = new BusinessBranchList();
            try
            {
                defaultAddress = await CommApi.GetApiRequest<BusinessBranchList>(ApiUrls.GoldenSystemBusinessBranchList, "Active", App.UserData.Authentification.Token);
                DocumentAdviceList = await CommApi.GetApiRequest<SystemDocumentAdviceList>(ApiUrls.GoldenSystemSystemDocumentAdviceList, "offer/" + defaultAddress.Id, App.UserData.Authentification.Token);
                if (DocumentAdviceList == null) { await MainWindow.ShowMessageOnMainWindow(true, Resources["documentAdviceNotSet"].ToString()); }
                cb_totalCurrency.ItemsSource = CurrencyList = await CommApi.GetApiRequest<List<BasicCurrencyList>>(ApiUrls.GoldenSystemBasicCurrencyList, null, App.UserData.Authentification.Token);
                cb_notes.ItemsSource = NotesList = await CommApi.GetApiRequest<List<BusinessNotesList>>(ApiUrls.GoldenSystemBusinessNotesList, null, App.UserData.Authentification.Token);
                cb_unit.ItemsSource = UnitList = await CommApi.GetApiRequest<List<BasicUnitList>>(ApiUrls.GoldenSystemBasicUnitList, null, App.UserData.Authentification.Token);
                cb_vat.ItemsSource = VatList = await CommApi.GetApiRequest<List<BasicVatList>>(ApiUrls.GoldenSystemBasicVatList, null, App.UserData.Authentification.Token);

                CurrencyList.ForEach(async currency =>
                {
                    if (!currency.Fixed) { currency.ExchangeRate = (await CommApi.GetApiRequest<BusinessExchangeRateList>(ApiUrls.GoldenSystemBusinessExchangeRateList, currency.Name, App.UserData.Authentification.Token)).Value; }
                });

                Supplier = defaultAddress.CompanyName + Environment.NewLine +
                            defaultAddress.ContactName + Environment.NewLine +
                            defaultAddress.Street + Environment.NewLine +
                            defaultAddress.PostCode + " " + defaultAddress.City + Environment.NewLine + Environment.NewLine +
                            Resources["account"].ToString() + ": " + defaultAddress.BankAccount + Environment.NewLine +
                            Resources["ico"].ToString() + ": " + defaultAddress.Ico + "; " + Resources["dic"].ToString() + ": " + defaultAddress.Dic + Environment.NewLine +
                            Resources["phone"].ToString() + ": " + defaultAddress.Phone + Environment.NewLine +
                            Resources["email"].ToString() + ": " + defaultAddress.Email;

                offerList = await CommApi.GetApiRequest<List<BusinessOfferList>>(ApiUrls.GoldenSystemBusinessOfferList, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token);
                offerList.ForEach(record =>
                {
                    ExtendedOfferList item = new ExtendedOfferList()
                    {
                        Id = record.Id,
                        DocumentNumber = record.DocumentNumber,
                        Supplier = record.Supplier,
                        Customer = record.Customer,
                        OfferValidity = record.OfferValidity,
                        Storned = record.Storned,
                        TotalCurrencyId = record.TotalCurrencyId,
                        Description = record.Description,
                        TotalPriceWithVat = record.TotalPriceWithVat,
                        UserId = record.UserId,
                        TimeStamp = record.TimeStamp,
                        TotalCurrency = CurrencyList.Where(a => a.Id == record.TotalCurrencyId).First().Name
                    };
                    extendedOfferList.Add(item);
                });
                DgListView.ItemsSource = extendedOfferList;
                DgListView.Items.Refresh();
            }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }

        /// <summary>
        /// Standartized method for translating column names of DatagidView (List Data)
        /// Manual Changing is needed for set Translate of Column Names via Dictionary Items
        /// Here you can set Format(Date,time, etc),Index position, Hide Column, Translate, change grahics Style
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working with page internal reaction on DatagrigView DataFiling on Start Page
        /// Runned On Page Loading
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="ex"></param>
        private async void DgListView_Translate(object sender, EventArgs ex) {
            try
            {
                ((DataGrid)sender).Columns.ToList().ForEach(async e =>
                {
                    string headername = e.Header.ToString();
                    if (headername == "DocumentNumber") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 1; }
                    else if (headername == "Supplier") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 2; }
                    else if (headername == "Customer") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 3; }
                    else if (headername == "OfferValidity") { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = DatagridStyles.gridTextRightAligment; e.DisplayIndex = 4; }
                    else if (headername == "Storned") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 8; }
                    else if (headername == "Description") e.Header = await DBOperations.DBTranslation(headername);
                    else if (headername == "TotalPriceWithVat") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 5; e.CellStyle = DatagridStyles.gridTextRightAligment; (e as DataGridTextColumn).Binding.StringFormat = "N2"; }
                    else if (headername == "TotalCurrency") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 6; }
                    else if (headername == "Timestamp") { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = DatagridStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 1; }
                    
                    else if (headername == "Id") e.DisplayIndex = 0;
                    else if (headername == "UserId") e.Visibility = Visibility.Hidden;
                    else if (headername == "TotalCurrencyId") e.Visibility = Visibility.Hidden;
                });
            }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        /// <summary>
        /// Standartized method for searching match in setted columns. Searched value is from the simple 'Search Input' for DatagidView (List Data)
        /// Manual Changing is needed of filtered columns by Search Value
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working with pages Called from MainWindow.cs
        /// Dynamicaly Called Only from MainWindow.cs when Search value Inserted
        /// </summary>
        /// <param name="filter"></param>
        public void Filter(string filter) {
            try
            {
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) =>
                {
                    ExtendedOfferList user = e as ExtendedOfferList;
                    return user.Customer.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(user.Description) && user.Description.ToLower().Contains(filter.ToLower());
                };
            }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        /// <summary>
        /// Standartized Method on All Pages with Forms for New Record
        /// ALL Needed changes Are done By Replace CLASSNAME not needed manual work
        /// Dynamicaly Called Only from MainWindow.cs on New button Click
        /// Only Set Record And Hide Dataview and Show Detail
        /// </summary>
        public void NewRecord() {
            selectedRecord = new ExtendedOfferList();
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        /// <summary>
        /// Standartized Method on All Pages with Forms for New Record
        /// ALL Needed changes Are done By Replace CLASSNAME not needed manual work
        /// Dynamicaly Called Only from MainWindow.cs on Edit button Click
        /// Only Set Record And Hide Dataview and Show Detail with selected Record
        /// </summary>
        public void EditRecord(bool copy) {
            selectedRecord = (ExtendedOfferList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }

        /// <summary>
        /// Standartized Method on All Pages with Forms for New Record
        /// ALL Needed changes Are done By Replace CLASSNAME not needed manual work
        /// Dynamicaly Called Only from MainWindow.cs on Delete button Click
        /// Show MainWindow Standartized Message with info About Delete and After confirm Send DeleteApiRequest
        /// Reload Datalist and cancel Selected Record
        /// </summary>
        public async void DeleteRecord() {
            selectedRecord = (ExtendedOfferList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + selectedRecord.Id.ToString(), true);
            if (result == MessageDialogResult.Affirmative)
            {
                DBResultMessage dBResult = await CommApi.DeleteApiRequest(ApiUrls.GoldenSystemBusinessOfferList, selectedRecord.Id.ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage);
                await LoadDataList(); SetRecord(false);
            }
        }

        /// <summary>
        /// Standartized method for selecting and opening Detail Form. This is only View Page, that is only for Select record
        /// This is full automatic, not needed manual work
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working page its local control From XAML
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            if (DgListView.SelectedItems.Count == 0) return;
            selectedRecord = (ExtendedOfferList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        /// <summary>
        /// Standartized method for select one record only.
        /// This is full automatic, not needed manual work
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working page its local control From XAML
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="SelectionChangedEventArgs"/> instance containing the event data.</param>
        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0)
            { selectedRecord = (ExtendedOfferList)DgListView.SelectedItem; }
            else { selectedRecord = new ExtendedOfferList(); }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(false);
        }

        /// <summary>
        /// Standartized method for Save Record And return to Dataview.
        /// Manual work need, Here is Join Betwen XAML inputs and Selected Record Dataset (dataset for Detail): Direction FORM to SELECTED RECORD
        /// By ClasName Replacing All other changes are automaticaly (API,DatasetType), just must define and control Each Field Of Dataset
        /// this method is for global working page its local control From XAML
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RoutedEventArgs"/> instance containing the event data.</param>
        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            try
            {
                DBResultMessage dBResult;
                selectedRecord.DocumentNumber = txt_documentNumber.Text;
                selectedRecord.Supplier = txt_supplier.Text;
                selectedRecord.Customer = txt_customer.Text;
                selectedRecord.OfferValidity = (txt_offerValidity.Value == null) ? 30 : (int)txt_offerValidity.Value;
                selectedRecord.Storned = (bool)chb_storned.IsChecked;
                selectedRecord.TotalCurrencyId = ((BasicCurrencyList)cb_totalCurrency.SelectedItem).Id;
                selectedRecord.Description = txt_description.Text;
                selectedRecord.TotalPriceWithVat = decimal.Parse(txt_totalPrice.Text.Split(' ')[0]);
                selectedRecord.UserId = App.UserData.Authentification.Id;
                selectedRecord.TimeStamp = DateTimeOffset.Now.DateTime;

                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0)
                {
                    dBResult = await CommApi.PutApiRequest(ApiUrls.GoldenSystemBusinessOfferList, httpContent, null, App.UserData.Authentification.Token);
                }
                else { dBResult = await CommApi.PostApiRequest(ApiUrls.GoldenSystemBusinessOfferList, httpContent, null, App.UserData.Authentification.Token); }

                if (dBResult.RecordCount > 0)
                {
                    //Save Items
                    DocumentItemList.ForEach(item => { item.Id = 0; item.DocumentNumber = dBResult.Status; item.UserId = App.UserData.Authentification.Id; });
                    dBResult = await CommApi.DeleteApiRequest(ApiUrls.GoldenSystemBusinessOfferSupportList, dBResult.Status, App.UserData.Authentification.Token);
                    json = JsonConvert.SerializeObject(DocumentItemList); httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                    dBResult = await CommApi.PutApiRequest(ApiUrls.GoldenSystemBusinessOfferSupportList, httpContent, null, App.UserData.Authentification.Token);
                    if (dBResult.RecordCount != DocumentItemList.Count()) { await MainWindow.ShowMessageOnMainWindow(true, Resources["itemsDBError"].ToString() + Environment.NewLine + dBResult.ErrorMessage); }
                    else
                    {
                        selectedRecord = new ExtendedOfferList();
                        await LoadDataList();
                        SetRecord(false);
                    }
                }
                else { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
            }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        /// <summary>
        /// Standartized method for cancel of Editing. Hide Detail and Dataview List is Shown
        /// This is full automatic, not needed manual work
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working page its local control From XAML
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RoutedEventArgs"/> instance containing the event data.</param>
        private void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (ExtendedOfferList)DgListView.SelectedItem : new ExtendedOfferList();
            SetRecord(false);
        }

        /// <summary>
        /// Standartized method for ¨Set New Record/ Edit Record / Copy Record And return to Dataview.
        /// Manual work need, Here is Join Betwen XAML inputs and Selected Record Dataset (dataset for Detail): Direction Selected record to FORM
        /// By ClasName Replacing All other changes are automaticaly (API,DatasetType), just must define and control Each Field Of Dataset
        /// this method is for global working page its local control From XAML
        ///
        /// In this type Form Here Are loaded Data for SublistView (on knows selected record for correct join)
        /// </summary>
        /// <param name="showForm">if set to <c>true</c> [show form].</param>
        /// <param name="copy">if set to <c>true</c> [copy].</param>
        private async void SetRecord(bool showForm, bool copy = false) {
            SetSubListsNonActiveOnNewItem(selectedRecord.Id == 0);
            selectedRecord.Id = (copy) ? 0 : selectedRecord.Id;

            string originalDocumentNumber = (string.IsNullOrWhiteSpace(selectedRecord.DocumentNumber) && !string.IsNullOrWhiteSpace(DocumentAdviceList.Number)) ? (DocumentAdviceList.Prefix + (int.Parse(DocumentAdviceList.Number) + 1).ToString("D" + DocumentAdviceList.Number.Length.ToString())) : selectedRecord.DocumentNumber;
            if (copy)
            {
                txt_documentNumber.Text = (DocumentAdviceList.Prefix + (int.Parse(DocumentAdviceList.Number) + 1).ToString("D" + DocumentAdviceList.Number.Length.ToString()));
            }
            else { txt_documentNumber.Text = originalDocumentNumber; }

            txt_supplier.Text = (!string.IsNullOrWhiteSpace(selectedRecord.Supplier)) ? selectedRecord.Supplier : Supplier;
            txt_customer.Text = selectedRecord.Customer;
            txt_offerValidity.Value = (selectedRecord.OfferValidity == 0) ? 30 : selectedRecord.OfferValidity;
            chb_storned.IsChecked = selectedRecord.Storned;
            cb_totalCurrency.Text = selectedRecord.TotalCurrency;
            txt_description.Text = selectedRecord.Description;

            if (showForm)
            {
                DocumentItemList = await CommApi.GetApiRequest<List<DocumentItemList>>(ApiUrls.GoldenSystemBusinessOfferSupportList, originalDocumentNumber, App.UserData.Authentification.Token);
                DgSubListView.ItemsSource = DocumentItemList; DgSubListView.Items.Refresh(); ClearItemsFields(); txt_totalPrice.Text = DocumentItemList.Sum(a => a.TotalPriceWithVat).ToString(documentVatPriceFormat) + ((cb_totalCurrency.SelectedItem != null) ? " " + ((BasicCurrencyList)cb_totalCurrency.SelectedItem).Name : "");
                if (CurrencyList.Where(a => a.Default).Count() == 1 && cb_totalCurrency.Text == null) { cb_totalCurrency.Text = CurrencyList.First(a => a.Default).Name; }

                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = false;
                ListView.Visibility = Visibility.Hidden; ListForm.Visibility = Visibility.Visible; dataViewSupport.FormShown = true;
            }
            else
            {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = true;
                ListForm.Visibility = Visibility.Hidden; ListView.Visibility = Visibility.Visible; dataViewSupport.FormShown = false;
            }
        }

        /// <summary>
        /// Standartized method for translating column names of SubDatagidView (List Data)
        /// Manual Changing is needed for set Translate of Column Names via Dictionary Items
        /// Here you can set Format(Date,time, etc),Index position, Hide Column, Translate, change grahics Style
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working with page internal reaction on DatagrigView DataFiling on Start Page
        /// Runned On Page Loading
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="ex"></param>
        private void DgSubListView_Translate(object sender, EventArgs ex) {
            ((DataGrid)sender).Columns.ToList().ForEach(e =>
            {
                string headername = e.Header.ToString();
                if (headername == "PartNumber") e.Header = Resources["partNumber"].ToString();
                else if (headername == "Name") e.Header = Resources["fname"].ToString();
                else if (headername == "Unit") { e.Header = Resources["unit"].ToString(); ; e.CellStyle = DatagridStyles.gridTextRightAligment; }
                else if (headername == "PcsPrice") { e.Header = Resources["pcsPrice"].ToString(); e.CellStyle = DatagridStyles.gridTextRightAligment; }
                else if (headername == "Count") { e.Header = Resources["count"].ToString(); e.CellStyle = DatagridStyles.gridTextRightAligment; }
                else if (headername == "TotalPrice") { e.Header = Resources["totalPrice"].ToString(); e.CellStyle = DatagridStyles.gridTextRightAligment; }
                else if (headername == "Vat") { e.Header = Resources["vat"].ToString(); e.CellStyle = DatagridStyles.gridTextRightAligment; }
                else if (headername == "TotalPriceWithVat") { e.Header = Resources["totalPriceWithVat"].ToString(); e.CellStyle = DatagridStyles.gridTextRightAligment; }
                else if (headername == "Id") e.Visibility = Visibility.Hidden;
                else if (headername == "UserId") e.Visibility = Visibility.Hidden;
                else if (headername == "TimeStamp") e.Visibility = Visibility.Hidden;
                else if (headername == "DocumentNumber") e.Visibility = Visibility.Hidden;
            });
        }

        #region Customer Selection

        /// <summary>
        /// Standartized method indicate start loading all data of SubRecord after Selected in Combobox
        /// This is full automatic, not needed manual work
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void SelectGotFocus(object sender, RoutedEventArgs e) => UpdateCustomerSearchResults();

        /// <summary>
        /// Standartized method Filling Customer Input by Selected Value
        /// This is full automatic, not needed manual work
        /// </summary>
        private async void UpdateCustomerSearchResults() {
            try
            {
                lv_customerSearchResults.Visibility = Visibility.Visible;
                List<BusinessAddressList> tempAddressList = AddressList.Where(a => a.CompanyName.ToLower().Contains(!string.IsNullOrWhiteSpace(txt_customerFilter.Text) ? txt_customerFilter.Text.ToLower() : "")).ToList();
                if (tempAddressList.Count() == 0 && !messageShown)
                {
                    messageShown = true;
                    var result = await MainWindow.ShowMessageOnMainWindow(false, Resources["companyNotExist"].ToString());
                    if (result == MessageDialogResult.Affirmative) { messageShown = false; }
                    txt_customerFilter.Text = LastCustomerCorrectSearch; txt_customerFilter.CaretIndex = txt_customer.Text.Length;
                }
                else
                {
                    lv_customerSearchResults.ItemsSource = tempAddressList;
                    if (lv_customerSearchResults.Items.Count == 1)
                    {
                        lv_customerSearchResults.SelectedItem = lv_customerSearchResults.Items[0];
                        SetCustomer();
                    }
                    else { lv_customerSearchResults.Visibility = Visibility.Visible; }
                    LastCustomerCorrectSearch = txt_customerFilter.Text;
                }
            }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        /// <summary>
        /// Standartized method for Keyboard control of SelectBox
        /// This is full automatic, not needed manual work
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Customer_KeyDown(object sender, KeyEventArgs e) {
            if (e.Key == Key.Up && lv_customerSearchResults.Visibility == Visibility.Visible) { lv_customerSearchResults.Focus(); }
            if (e.Key == Key.Down && lv_customerSearchResults.Visibility == Visibility.Visible) { lv_customerSearchResults.Focus(); }
            if (e.Key != Key.Down && e.Key != Key.Up && e.Key != Key.Enter && lv_customerSearchResults.Visibility == Visibility.Visible) { txt_customerFilter.Focus(); }
        }

        /// <summary>
        /// Standartized methods with Indicate Customer Selection and Start Filling Input
        /// This is full automatic, not needed manual work
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void SelectCustomer_Enter(object sender, KeyEventArgs e) { if ((e.Key == Key.Enter) && lv_customerSearchResults.Visibility == Visibility.Visible) { SetCustomer(); } }

        private void MouseSelectCustomer_Click(object sender, MouseButtonEventArgs e) => SetCustomer();

        /// <summary>
        /// Standartized methods For Filling Input after Selection
        /// This is full automatic, not needed manual work
        /// </summary>
        private void SetCustomer() {
            if (lv_customerSearchResults.SelectedIndex > -1)
            {
                Customer = ((BusinessAddressList)lv_customerSearchResults.SelectedItem).CompanyName + Environment.NewLine +
                            ((BusinessAddressList)lv_customerSearchResults.SelectedItem).ContactName + Environment.NewLine +
                            ((BusinessAddressList)lv_customerSearchResults.SelectedItem).Street + Environment.NewLine +
                            ((BusinessAddressList)lv_customerSearchResults.SelectedItem).PostCode + " " + ((BusinessAddressList)lv_customerSearchResults.SelectedItem).City + Environment.NewLine + Environment.NewLine +
                            Resources["account"].ToString() + ": " + ((BusinessAddressList)lv_customerSearchResults.SelectedItem).BankAccount + Environment.NewLine +
                            Resources["ico"].ToString() + ": " + ((BusinessAddressList)lv_customerSearchResults.SelectedItem).Ico + "; " + Resources["dic"].ToString() + ": " + ((BusinessAddressList)lv_customerSearchResults.SelectedItem).Dic + Environment.NewLine +
                            Resources["phone"].ToString() + ": " + ((BusinessAddressList)lv_customerSearchResults.SelectedItem).Phone + Environment.NewLine +
                            Resources["email"].ToString() + ": " + ((BusinessAddressList)lv_customerSearchResults.SelectedItem).Email;
                txt_customer.Text = Customer;
            }
            else { txt_customer.Text = null; }
            lv_customerSearchResults.Visibility = Visibility.Hidden; txt_customer.Focus();
        }

        #endregion Customer Selection

        #region SubItem Selection

        /// <summary>
        /// Standartized method indicate start loading all data of SubRecord after Selected in Combobox
        /// This is full automatic, not needed manual work
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void PartNumberGotFocus(object sender, RoutedEventArgs e) => UpdatePartNumberSearchResults();

        private void NameGotFocus(object sender, RoutedEventArgs e) => lv_partNumberSearchResults.Visibility = Visibility.Hidden;

        /// <summary>
        /// Standartized method Filling Customer Input by Selected Value
        /// This is full automatic, not needed manual work
        /// </summary>
        private async void UpdatePartNumberSearchResults() {
            try
            {
                lv_partNumberSearchResults.Visibility = Visibility.Visible;
                List<BasicItemList> tempItemList = ItemList.Where(a => a.PartNumber.ToLower().Contains(!string.IsNullOrWhiteSpace(txt_partNumber.Text) ? txt_partNumber.Text.ToLower() : "")).ToList();
                if (tempItemList.Count() == 0 && !messageShown)
                {
                    messageShown = true;
                    var result = await MainWindow.ShowMessageOnMainWindow(false, Resources["itemNotExist"].ToString());
                    if (result == MessageDialogResult.Affirmative) { messageShown = false; }
                    txt_partNumber.Text = LastPartNumberCorrectSearch; txt_partNumber.CaretIndex = txt_customer.Text.Length;
                }
                else
                {
                    lv_partNumberSearchResults.ItemsSource = tempItemList;
                    if (lv_partNumberSearchResults.Items.Count == 1)
                    {
                        lv_partNumberSearchResults.SelectedItem = lv_partNumberSearchResults.Items[0]; SetPartNumber();
                    }
                    else { lv_partNumberSearchResults.Visibility = Visibility.Visible; }
                    LastPartNumberCorrectSearch = txt_partNumber.Text;
                }
            }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        /// <summary>
        /// Standartized method for Keyboard control of SelectBox
        /// This is full automatic, not needed manual work
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void PartNumber_KeyDown(object sender, KeyEventArgs e) {
            if (e.Key == Key.Up && lv_partNumberSearchResults.Visibility == Visibility.Visible) { lv_partNumberSearchResults.Focus(); }
            if (e.Key == Key.Down && lv_partNumberSearchResults.Visibility == Visibility.Visible) { lv_partNumberSearchResults.Focus(); }
            if (e.Key != Key.Down && e.Key != Key.Up && e.Key != Key.Enter && lv_partNumberSearchResults.Visibility == Visibility.Visible) { txt_count.Focus(); }
        }

        /// <summary>
        /// Standartized method for select one record only.
        /// This is full automatic, not needed manual work
        /// This is on page With Sublist ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working page its local control From XAML
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="KeyEventArgs"/> instance containing the event data.</param>
        private void SelectPartNumber_Enter(object sender, KeyEventArgs e) { if ((e.Key == Key.Enter) && lv_partNumberSearchResults.Visibility == Visibility.Visible) { SetPartNumber(); } }

        private void MouseSelectPartNumber_Click(object sender, MouseButtonEventArgs e) => SetPartNumber();

        private void CountChanged(object sender, RoutedPropertyChangedEventArgs<double?> e) => CalculateItemVatPrice();

        /// <summary>
        /// Standartized methods For Filling Input after Selection
        /// This is full automatic, not needed manual work
        /// </summary>
        private void SetPartNumber() {
            if (lv_partNumberSearchResults.SelectedIndex > -1)
            {
                txt_partNumber.Text = ((BasicItemList)lv_partNumberSearchResults.SelectedItem).PartNumber;
                txt_name.Text = ((BasicItemList)lv_partNumberSearchResults.SelectedItem).Name;
                cb_unit.Text = ((BasicItemList)lv_partNumberSearchResults.SelectedItem).Unit;
                txt_pcsPrice.Value = double.Parse(((double)((BasicItemList)lv_partNumberSearchResults.SelectedItem).Price * (1 / (double)CurrencyList.First(a => a.Name == ((BasicCurrencyList)cb_totalCurrency.SelectedItem).Name).ExchangeRate) * (double)CurrencyList.First(a => a.Id == ((BasicItemList)lv_partNumberSearchResults.SelectedItem).CurrencyId).ExchangeRate).ToString(itemVatPriceFormat));
                cb_vat.SelectedItem = VatList.First(a => a.Id == ((BasicItemList)lv_partNumberSearchResults.SelectedItem).VatId);
                CalculateItemVatPrice();
            }
            lv_partNumberSearchResults.Visibility = Visibility.Hidden; txt_count.Focus();
        }

        #endregion SubItem Selection

        private void VatChanged(object sender, SelectionChangedEventArgs e) {
            CalculateItemVatPrice();
        }

        private void CalculateItemVatPrice() {
            try
            {
                txt_totalPriceWithVat.Text = ((double)txt_count.Value * (double)(txt_pcsPrice.Value + txt_pcsPrice.Value * (double)((BasicVatList)cb_vat.SelectedItem).Value)).ToString(itemVatPriceFormat) + " " + ((BasicCurrencyList)cb_totalCurrency.SelectedItem).Name;
                btn_insert.IsEnabled = true;
            }
            catch { txt_totalPriceWithVat.Text = null; btn_insert.IsEnabled = false; }
            txt_totalPrice.Text = DocumentItemList.Sum(a => a.TotalPriceWithVat).ToString(documentVatPriceFormat) + ((cb_totalCurrency.SelectedItem != null) ? " " + ((BasicCurrencyList)cb_totalCurrency.SelectedItem).Name : "");
        }

        /// <summary>
        /// Standartized method for select one record only.
        /// This is full automatic, not needed manual work
        /// This is on page With Sublist ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working page its local control From XAML
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="SelectionChangedEventArgs"/> instance containing the event data.</param>
        private void dgSubListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgSubListView.SelectedItems.Count > 0)
            {
                btn_delete.IsEnabled = true;
            }
            else { btn_delete.IsEnabled = false; }
        }

        /// <summary>
        /// Standartized method for Direct Insert SubRecord to SubListView
        /// Manual work needed, set correct data set for SubRecord
        /// This is on page With Sublist ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working page its local control From XAML
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RoutedEventArgs"/> instance containing the event data.</param>
        private void BtnItemInsert_Click(object sender, RoutedEventArgs e) {
            try
            {
                DocumentItemList.Add(new DocumentItemList()
                {
                    DocumentNumber = txt_documentNumber.Text,
                    PartNumber = txt_partNumber.Text,
                    Name = txt_name.Text,
                    Unit = cb_unit.Text,
                    PcsPrice = (decimal)txt_pcsPrice.Value,
                    Count = (decimal)txt_count.Value,
                    TotalPrice = (decimal)txt_pcsPrice.Value * (decimal)txt_count.Value,
                    Vat = ((BasicVatList)cb_vat.SelectedItem).Value,
                    TotalPriceWithVat = decimal.Parse(((double)txt_count.Value * (double)(txt_pcsPrice.Value + txt_pcsPrice.Value * (double)((BasicVatList)cb_vat.SelectedItem).Value)).ToString(itemVatPriceFormat))
                });
            }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            DgSubListView.ItemsSource = DocumentItemList;
            DgSubListView.Items.Refresh();

            txt_totalPrice.Text = DocumentItemList.Sum(a => a.TotalPriceWithVat).ToString(documentVatPriceFormat) + ((cb_totalCurrency.SelectedItem != null) ? " " + ((BasicCurrencyList)cb_totalCurrency.SelectedItem).Name : "");
            ClearItemsFields();
        }

        /// <summary>
        /// Standartized method for Direct Delete SubRecord to SubListView
        /// Manual work needed, set correct data set for SubRecord
        /// This is on page With Sublist ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working page its local control From XAML
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RoutedEventArgs"/> instance containing the event data.</param>
        private void BtnItemDelete_Click(object sender, RoutedEventArgs e) {
            DocumentItemList.RemoveAt(DgSubListView.SelectedIndex);
            DgSubListView.ItemsSource = DocumentItemList;
            DgSubListView.Items.Refresh();
            txt_totalPrice.Text = DocumentItemList.Sum(a => a.TotalPriceWithVat).ToString(documentVatPriceFormat) + ((cb_totalCurrency.SelectedItem != null) ? " " + ((BasicCurrencyList)cb_totalCurrency.SelectedItem).Name : "");
        }

        /// <summary>
        /// Standartized Maximal Simle Code with Reaction and Fill input After ParentComboboxSelection
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void NotesChanged(object sender, SelectionChangedEventArgs e) { if (cb_notes.SelectedItem != null) { txt_description.Text = ((BusinessNotesList)cb_notes.SelectedItem).Description; cb_notes.SelectedItem = null; } }

        /// <summary>
        /// Standartized Method for Clear SubRecord Input Fields with custom Dataset
        /// For Correct Using must be Fields changed for used dataset
        /// </summary>
        private void ClearItemsFields() {
            txt_partNumber.Text = txt_name.Text = cb_unit.Text = txt_totalPriceWithVat.Text = null;
            txt_count.Value = txt_pcsPrice.Value = null;
            cb_unit.SelectedItem = cb_vat.SelectedItem = null;
            lv_partNumberSearchResults.Visibility = Visibility.Hidden;
        }

        /// <summary>
        /// Standartized Method for Load All SubData which is needed for Working with SubRecord
        /// For Correct Using must be changed for actual datasets
        /// </summary>
        private async void SetSubListsNonActiveOnNewItem(bool newItem) {
            if (newItem)
            {
                cb_totalCurrency.ItemsSource = CurrencyList.Where(a => a.Active).ToList();
                AddressList = (await CommApi.GetApiRequest<List<BusinessAddressList>>(ApiUrls.GoldenSystemBusinessAddressList, null, App.UserData.Authentification.Token)).Where(a => a.Active).ToList();
                ItemList = (await CommApi.GetApiRequest<List<BasicItemList>>(ApiUrls.GoldenSystemBasicItemList, null, App.UserData.Authentification.Token)).Where(a => a.Active).ToList();
                cb_notes.ItemsSource = NotesList.Where(a => a.Active).ToList(); cb_unit.ItemsSource = UnitList.Where(a => a.Active).ToList(); cb_vat.ItemsSource = VatList.Where(a => a.Active).ToList();
            }
            else
            {
                cb_totalCurrency.ItemsSource = CurrencyList;
                AddressList = await CommApi.GetApiRequest<List<BusinessAddressList>>(ApiUrls.GoldenSystemBusinessAddressList, null, App.UserData.Authentification.Token);
                ItemList = await CommApi.GetApiRequest<List<BasicItemList>>(ApiUrls.GoldenSystemBasicItemList, null, App.UserData.Authentification.Token);
                cb_notes.ItemsSource = NotesList; cb_unit.ItemsSource = UnitList; cb_vat.ItemsSource = VatList;
            }
        }
    }
}

```    
			
---   
			### XAML Přehled a Formulář se SubPřehledem     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.TemplateClassListAutoDBTranslationWithSubViewPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:local="clr-namespace:GoldenSystem.Pages"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:xctk="http://schemas.xceed.com/wpf/xaml/toolkit"
    Name="Form"
    HorizontalAlignment="Stretch"
    VerticalAlignment="Stretch"
    d:DesignHeight="500"
    d:DesignWidth="600"
    Tag="Form"
    mc:Ignorable="d">

    <Grid
        Margin="0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch"
        Background="{DynamicResource AccentColorBrush}">
        <Grid x:Name="ListView" Visibility="Visible">
            <DataGrid
                x:Name="DgListView"
                Width="{Binding Path=ActualWidth, ElementName=Form}"
                Height="{Binding Path=ActualHeight, ElementName=Form}"
                HorizontalAlignment="Left" VerticalAlignment="Top" AutoGenerateColumns="True" AutoGeneratedColumns="DgListView_Translate" IsReadOnly="True"
                MouseDoubleClick="DgListView_MouseDoubleClick" SelectionChanged="DgListView_SelectionChanged" SelectionMode="Single" />
        </Grid>

        <Grid
            x:Name="ListForm"
            Background="{DynamicResource WhiteBrush}"
            Visibility="Visible">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="300" />
                <ColumnDefinition Width="*" />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="80" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="*" />
                <RowDefinition Height="110" />
            </Grid.RowDefinitions>

            <Label
                x:Name="lbl_id" Grid.Row="0" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <Controls:NumericUpDown
                x:Name="txt_id" Grid.Row="0" Grid.Column="1" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                Controls:TextBoxHelper.ClearTextButton="False" Controls:TextBoxHelper.Watermark="" HideUpDownButtons="True" IsEnabled="False" ToolTip="This unique identificator is read only value which is filled automatically by system" />

            <Label
                x:Name="lbl_name" Grid.Row="1" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <TextBox
                x:Name="txt_name" Grid.Row="1" Grid.Column="1" Margin="0,2,0,2" Controls:TextBoxHelper.ClearTextButton="true"
                Controls:TextBoxHelper.IsWaitingForData="True" Controls:TextBoxHelper.Watermark="" MaxLength="5" />

            <Label
                x:Name="lbl_exchangeRate" Grid.Row="2" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <Controls:NumericUpDown
                x:Name="txt_exchangeRate" Grid.Row="2" Grid.Column="1" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                Controls:TextBoxHelper.ClearTextButton="true" HasDecimals="True" Maximum="9999999999.99" NumericInputMode="Decimal" SelectAllOnFocus="True"
                StringFormat="N2" />

            <Label
                x:Name="lbl_fixed" Grid.Row="3" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <CheckBox
                x:Name="chb_fixed" Grid.Row="3" Grid.Column="1" VerticalAlignment="Center" Checked="Fixed_Checked"
                Unchecked="Fixed_UnChecked" />

            <Label
                x:Name="lbl_description" Grid.Row="4" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <TextBox
                x:Name="tb_description" Grid.Row="4" Grid.Column="1" Margin="0,2,0,2" Controls:TextBoxHelper.ClearTextButton="True"
                Controls:TextBoxHelper.Watermark="" AcceptsReturn="True" TextWrapping="Wrap" VerticalScrollBarVisibility="Visible" />

            <Label
                x:Name="lbl_default" Grid.Row="5" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <CheckBox
                x:Name="chb_default" Grid.Row="5" Grid.Column="1" VerticalAlignment="Center" />

            <Label
                x:Name="lbl_active" Grid.Row="6" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <CheckBox
                x:Name="chb_active" Grid.Row="6" Grid.Column="1" VerticalAlignment="Center" />

            <Grid
                x:Name="SubListView" Grid.Row="9" Grid.Column="0" Grid.ColumnSpan="2" HorizontalAlignment="Stretch"
                VerticalAlignment="Stretch" Visibility="Visible">
                <Grid.ColumnDefinitions>
                    <ColumnDefinition Width="300" />
                    <ColumnDefinition Width="*" />
                </Grid.ColumnDefinitions>
                <Grid.RowDefinitions>
                    <RowDefinition Height="Auto" />
                    <RowDefinition Height="*" />
                </Grid.RowDefinitions>

                <DataGrid
                    x:Name="DgSubListView" Grid.Row="1" Grid.Column="1"
                    Width="{Binding Path=ActualWidth, ElementName=SubListView}"
                    Height="{Binding Path=ActualHeight, ElementName=SubListView}"
                    HorizontalAlignment="Stretch" VerticalAlignment="Top" HorizontalContentAlignment="Stretch" AutoGenerateColumns="True" AutoGeneratedColumns="DgSubListView_Translate"
                    IsReadOnly="True" SelectionMode="Single" />
            </Grid>

            <Button
                Name="btn_save" Grid.Row="10" Grid.Column="0" Width="200" Height="40"
                Margin="44,21,0,44" HorizontalAlignment="Left" VerticalAlignment="Bottom" Click="BtnSave_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />
            <Button
                Name="btn_cancel" Grid.Row="10" Grid.Column="1" Width="200" Height="40"
                Margin="44,21,44,44" HorizontalAlignment="Right" VerticalAlignment="Bottom" Click="BtnCancel_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />
        </Grid>
    </Grid>
</UserControl>

----------------------------------------------------------------------------------------------------------------

using GoldenSystem.Api;
using GoldenSystem.Classes;
using GoldenSystem.GlobalOperations;
using GoldenSystem.GlobalStyles;
using MahApps.Metro.Controls.Dialogs;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

// This is Template Page ListView + UserForm + SubListView Only
namespace GoldenSystem.Pages {

    /// <summary>
    /// This standartized Template is only for list view od Data table
    /// Called from MainWindow.cs on open New Tab
    /// </summary>
    public partial class TemplateClassListAutoDBTranslationWithSubViewPage : UserControl {

        /// <summary>
        /// Standartized declaring static page data and selected record for All Pages
        /// this method is for global working with pages Called from MainWindow.cs for Control of Button Menu and Selections (Report,Filter and more)
        /// All is setted as global Classes for All Pages and Work is Fully automatized by System core
        ///
        /// HERE you Define All Data Variables For This Form
        /// </summary>
        public static DataViewSupport dataViewSupport = new DataViewSupport();

        public static BasicCurrencyList selectedRecord = new BasicCurrencyList();

        public BusinessExtendedExchangeRateList selectedSubRecord = new BusinessExtendedExchangeRateList();

        /// <summary>
        /// Initialize page with loading Dictionary and start loding data
        /// Manual work needed Translate All XAML fields by Resources
        /// Runned on start
        ///
        /// </summary>
        public TemplateClassListAutoDBTranslationWithSubViewPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, JsonConvert.DeserializeObject<Language>(App.Setting.DefaultLanguage).Value);

            try {
                DataOperations.TranslateFormFields(ref ListForm);
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            _ = LoadDataList();
            SetRecord(false);
        }

        /// <summary>
        /// Standartized Method for Loading data.
        /// Manual Changing is needed for simple form is All changed By CLASNAME Chage, but If you need More API data for selection Here are Defined All incoming Data
        /// Loading is same centralized only change ClasName For Diferent Dataset
        ///
        /// After all data for DatagridView (List Data) are loaded The ProgressRing is hidden
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working with pages Called from MainWindow.cs on Refresh button click
        /// Runned on Pageloading or Filter or View Change
        /// </summary>
        /// <returns></returns>
        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try { if (MainWindow.serviceRunning) DgListView.ItemsSource = await CommApi.GetApiRequest<List<BasicCurrencyList>>(ApiUrls.GoldenSystemBasicCurrencyList, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token); }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }

        /// <summary>
        /// Standartized method for translating column names of DatagidView (List Data)
        /// Manual Changing is needed for set Translate of Column Names via Dictionary Items
        /// Here you can set Format(Date,time, etc),Index position, Hide Column, Translate, change grahics Style
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working with page internal reaction on DatagrigView DataFiling on Start Page
        /// Runned On Page Loading
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="ex"></param>
        private async void DgListView_Translate(object sender, EventArgs ex) {
            ((DataGrid)sender).Columns.ToList().ForEach(async e =>
            {
                string headername = e.Header.ToString();
                if (headername == "Name") { e.Header = await DBOperations.DBTranslation("fname"); e.DisplayIndex = 1; }
                else if (headername == "ExchangeRate") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 2; }
                else if (headername == "Fixed") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 3; } 
                else if (headername == "Description") e.Header = await DBOperations.DBTranslation(headername);
                else if (headername == "Default") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = DgListView.Columns.Count - 3; }
                else if (headername == "Active") { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = DatagridStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 2; }
                else if (headername == "Timestamp") { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = DatagridStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 1; }
                else if (headername == "Id") e.DisplayIndex = 0;
                else if (headername == "UserId") e.Visibility = Visibility.Hidden;
            });
        }

        /// <summary>
        /// Standartized method for searching match in setted columns. Searched value is from the simple 'Search Input' for DatagidView (List Data)
        /// Manual Changing is needed of filtered columns by Search Value
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working with pages Called from MainWindow.cs
        /// Dynamicaly Called Only from MainWindow.cs when Search value Inserted
        /// </summary>
        /// <param name="filter"></param>
        public void Filter(string filter) {
            try
            {
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) =>
                {
                    BasicCurrencyList user = e as BasicCurrencyList;
                    return user.Name.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(user.Description) && user.Description.ToLower().Contains(filter.ToLower());
                };
            }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        /// <summary>
        /// Standartized Method on All Pages with Forms for New Record
        /// ALL Needed changes Are done By Replace CLASSNAME not needed manual work
        /// Dynamicaly Called Only from MainWindow.cs on New button Click
        /// Only Set Record And Hide Dataview and Show Detail
        /// </summary>
        public void NewRecord() {
            selectedRecord = new BasicCurrencyList();
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        /// <summary>
        /// Standartized Method on All Pages with Forms for New Record
        /// ALL Needed changes Are done By Replace CLASSNAME not needed manual work
        /// Dynamicaly Called Only from MainWindow.cs on Edit button Click
        /// Only Set Record And Hide Dataview and Show Detail with selected Record
        /// </summary>
        public void EditRecord(bool copy) {
            selectedRecord = (BasicCurrencyList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }

        /// <summary>
        /// Standartized Method on All Pages with Forms for New Record
        /// ALL Needed changes Are done By Replace CLASSNAME not needed manual work
        /// Dynamicaly Called Only from MainWindow.cs on Delete button Click
        /// Show MainWindow Standartized Message with info About Delete and After confirm Send DeleteApiRequest
        /// Reload Datalist and cancel Selected Record
        /// </summary>
        public async void DeleteRecord() {
            selectedRecord = (BasicCurrencyList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + selectedRecord.Id.ToString(), true);
            if (result == MessageDialogResult.Affirmative)
            {
                DBResultMessage dBResult = await CommApi.DeleteApiRequest(ApiUrls.GoldenSystemBasicCurrencyList, selectedRecord.Id.ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage);
                _ = LoadDataList(); SetRecord(false);
            }
        }

        /// <summary>
        /// Standartized method for selecting and opening Detail Form. This is only View Page, that is only for Select record
        /// This is full automatic, not needed manual work
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working page its local control From XAML
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            if (DgListView.SelectedItems.Count == 0) return;
            selectedRecord = (BasicCurrencyList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        /// <summary>
        /// Standartized method for select one record only.
        /// This is full automatic, not needed manual work
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working page its local control From XAML
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="SelectionChangedEventArgs"/> instance containing the event data.</param>
        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0)
            {
                selectedRecord = (BasicCurrencyList)DgListView.SelectedItem;
            }
            else { selectedRecord = new BasicCurrencyList(); }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(false);
        }

        /// <summary>
        /// Standartized method for Save Record And return to Dataview.
        /// Manual work need, Here is Join Betwen XAML inputs and Selected Record Dataset (dataset for Detail): Direction FORM to SELECTED RECORD
        /// By ClasName Replacing All other changes are automaticaly (API,DatasetType), just must define and control Each Field Of Dataset
        /// this method is for global working page its local control From XAML
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RoutedEventArgs"/> instance containing the event data.</param>
        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            try
            {
                DBResultMessage dBResult;
                selectedRecord.Id = (int)((txt_id.Value != null) ? txt_id.Value : 0);
                selectedRecord.Name = txt_name.Text;
                selectedRecord.ExchangeRate = (decimal)txt_exchangeRate.Value;
                selectedRecord.Fixed = (bool)chb_fixed.IsChecked;
                selectedRecord.Description = tb_description.Text;
                selectedRecord.Default = (bool)chb_default.IsChecked;
                selectedRecord.UserId = App.UserData.Authentification.Id;
                selectedRecord.Active = (bool)chb_active.IsChecked;
                selectedRecord.TimeStamp = DateTimeOffset.Now.DateTime;

                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0)
                {
                    dBResult = await CommApi.PutApiRequest(ApiUrls.GoldenSystemBasicCurrencyList, httpContent, null, App.UserData.Authentification.Token);
                }
                else { dBResult = await CommApi.PostApiRequest(ApiUrls.GoldenSystemBasicCurrencyList, httpContent, null, App.UserData.Authentification.Token); }

                if (dBResult.RecordCount > 0)
                {
                    selectedRecord = new BasicCurrencyList();
                    await LoadDataList();
                    SetRecord(false);
                }
                else { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
            }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        /// <summary>
        /// Standartized method for cancel of Editing. Hide Detail and Dataview List is Shown
        /// This is full automatic, not needed manual work
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working page its local control From XAML
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RoutedEventArgs"/> instance containing the event data.</param>
        private void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (BasicCurrencyList)DgListView.SelectedItem : new BasicCurrencyList();
            SetRecord(false);
        }

        /// <summary>
        /// Standartized method for ¨Set New Record/ Edit Record / Copy Record And return to Dataview.
        /// Manual work need, Here is Join Betwen XAML inputs and Selected Record Dataset (dataset for Detail): Direction Selected record to FORM
        /// By ClasName Replacing All other changes are automaticaly (API,DatasetType), just must define and control Each Field Of Dataset
        /// this method is for global working page its local control From XAML
        ///
        /// In this type Form Here Are loaded Data for SublistView (on knows selected record for correct join)
        /// </summary>
        /// <param name="showForm">if set to <c>true</c> [show form].</param>
        /// <param name="copy">if set to <c>true</c> [copy].</param>
        private void SetRecord(bool showForm, bool copy = false) {
            txt_id.Value = (copy) ? 0 : selectedRecord.Id;
            txt_name.Text = selectedRecord.Name;
            txt_exchangeRate.Value = (double)selectedRecord.ExchangeRate;
            chb_fixed.IsChecked = selectedRecord.Fixed;
            tb_description.Text = selectedRecord.Description;
            chb_default.IsChecked = selectedRecord.Default;
            chb_active.IsChecked = (selectedRecord.Id == 0) ? App.Setting.ActiveNewInputDefault : selectedRecord.Active;

            if (showForm)
            {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = false;
                ListView.Visibility = Visibility.Hidden; ListForm.Visibility = Visibility.Visible; dataViewSupport.FormShown = true;
                if (!selectedRecord.Fixed) { SubListView.Visibility = Visibility.Visible; LoadSubDataList(); } else { SubListView.Visibility = Visibility.Hidden; }
            }
            else
            {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = true;
                ListForm.Visibility = Visibility.Hidden; ListView.Visibility = Visibility.Visible; dataViewSupport.FormShown = false;
            }
        }

        /// <summary>
        /// Standartized Method for Loading SubData.
        /// Manual Changing is needed for simple form is All changed By CLASNAME Chage, but If you need More API data for selection Here are Defined All incoming Data
        /// Loading is same centralized only change ClasName For Diferent Dataset
        ///
        /// After all data for DatagridView (List Data) are loaded The ProgressRing is hidden
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working with pages Called from MainWindow.cs on Refresh button click
        /// Runned on Pageloading or Filter or View Change
        /// </summary>
        /// <returns></returns>
        public async void LoadSubDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            List<BusinessExchangeRateList> exchangeRateList = new List<BusinessExchangeRateList>();
            List<BusinessExtendedExchangeRateList> BusinessExtendedExchangeRateList = new List<BusinessExtendedExchangeRateList>();
            try
            {
                if (MainWindow.serviceRunning) exchangeRateList = await CommApi.GetApiRequest<List<BusinessExchangeRateList>>(ApiUrls.GoldenSystemBusinessExchangeRateList, null, App.UserData.Authentification.Token);
                exchangeRateList.Where(a => a.CurrencyId == selectedRecord.Id).ToList().ForEach(record =>
                {
                    BusinessExtendedExchangeRateList item = new BusinessExtendedExchangeRateList()
                    {
                        Id = record.Id,
                        CurrencyId = record.CurrencyId,
                        Value = record.Value,
                        ValidFrom = record.ValidFrom,
                        ValidTo = record.ValidTo,
                        Description = record.Description,
                        UserId = record.UserId,
                        Active = record.Active,
                        TimeStamp = record.TimeStamp,
                        Currency = selectedRecord.Name
                    };
                    BusinessExtendedExchangeRateList.Add(item);
                });
                DgSubListView.ItemsSource = BusinessExtendedExchangeRateList;
                DgSubListView.Items.Refresh();
            }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden;
        }

        /// <summary>
        /// Standartized method for translating column names of SubDatagidView (List Data)
        /// Manual Changing is needed for set Translate of Column Names via Dictionary Items
        /// Here you can set Format(Date,time, etc),Index position, Hide Column, Translate, change grahics Style
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working with page internal reaction on DatagrigView DataFiling on Start Page
        /// Runned On Page Loading
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="ex"></param>
        private void DgSubListView_Translate(object sender, EventArgs ex) {
            ((DataGrid)sender).Columns.ToList().ForEach(e =>
            {
                string headername = e.Header.ToString();
                if (headername == "Currency") e.Header = Resources["currency"].ToString();
                else if (headername == "Value") e.Header = Resources["value"].ToString();
                else if (headername == "ValidFrom") e.Header = Resources["validFrom"].ToString();
                else if (headername == "ValidTo") e.Header = Resources["validTo"].ToString();
                else if (headername == "Description") e.Header = Resources["description"].ToString();
                else if (headername == "Active") { e.Header = Resources["active"].ToString(); e.CellStyle = DatagridStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 2; }
                else if (headername == "Timestamp") { e.Header = Resources["timestamp"].ToString(); e.CellStyle = DatagridStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 1; }
                else if (headername == "Id") e.DisplayIndex = 0;
                else if (headername == "UserId") e.Visibility = Visibility.Hidden;
                else if (headername == "CurrencyId") e.Visibility = Visibility.Hidden;
            });
        }

        /// <summary>
        /// Standartized method for Loading Data for Selected Record
        /// This is full automatic, not needed manual work
        /// This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
        /// this method is for global working page its local control From XAML
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RoutedEventArgs"/> instance containing the event data.</param>
        private void Fixed_Checked(object sender, RoutedEventArgs e) => SubListView.Visibility = Visibility.Hidden;

        private void Fixed_UnChecked(object sender, RoutedEventArgs e) {
            SubListView.Visibility = Visibility.Visible; LoadSubDataList();
        }
    }
}

```    
			
---   
			### XAML Přehrávač Videí, Zvuků     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.TemplateVideoPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:xceed="clr-namespace:WPFMediaKit.DirectShow.MediaPlayers;assembly=WPFMediaKit"
    Width="Auto"
    Height="Auto"
    d:DesignHeight="500"
    d:DesignWidth="600"
    Tag="Setting"
    mc:Ignorable="d">
    <UserControl.Resources>
        <Thickness x:Key="ControlMargin">0 5 0 0</Thickness>
        <Style
            x:Key="NormalCaseColumnHeader"
            BasedOn="{StaticResource MetroDataGridColumnHeader}"
            TargetType="{x:Type DataGridColumnHeader}">
            <Setter Property="Controls:ControlsHelper.ContentCharacterCasing" Value="Normal" />
        </Style>
    </UserControl.Resources>

    <Grid Name="configuration">
        <Grid
            Width="Auto"
            Height="Auto"
            Margin="0,0,0,0"
            HorizontalAlignment="Stretch"
            VerticalAlignment="Stretch"
            ForceCursor="False"
            ShowGridLines="False">
            <Grid.ColumnDefinitions>
                <ColumnDefinition />
                <ColumnDefinition />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="Auto" />
                <RowDefinition Height="*" />
                <RowDefinition Height="30" />
                <RowDefinition Height="50" />
                <RowDefinition Height="Auto" />
            </Grid.RowDefinitions>

            <MediaElement
                x:Name="me_videPlayer"
                Grid.Row="0"
                Grid.RowSpan="2"
                Grid.ColumnSpan="2"
                Margin="0"
                VerticalAlignment="Top"
                LoadedBehavior="Manual"
                MediaEnded="VidePlayerMediaEnded"
                ScrubbingEnabled="True"
                Stretch="UniformToFill"
                UnloadedBehavior="Stop"
                Volume="50" />
            <StackPanel
                Grid.Row="2"
                Grid.Column="0"
                Grid.ColumnSpan="2">
                <WrapPanel
                    x:Name="wp_timeLine"
                    Margin="0"
                    HorizontalAlignment="Stretch">
                    <Slider
                        x:Name="s_timelineSlider"
                        Width="{Binding Path=ActualWidth, ElementName=wp_timeLine}"
                        Margin="0"
                        HorizontalContentAlignment="Stretch"
                        AllowDrop="True"
                        IsMoveToPointEnabled="True"
                        Thumb.DragCompleted="SliProgress_DragCompleted"
                        Thumb.DragStarted="SliProgress_DragStarted"
                        TickFrequency="2" />
                </WrapPanel>
            </StackPanel>

            <StackPanel
                Grid.Row="3"
                Grid.Column="0"
                HorizontalAlignment="Left">
                <WrapPanel Margin="0" HorizontalAlignment="Left">
                    <Button
                        x:Name="btn_play"
                        Height="40"
                        Margin="20,0"
                        Padding="20,10"
                        Click="Btn_playClick"
                        Style="{DynamicResource AccentedSquareButtonStyle}" />
                    <Button
                        x:Name="btn_pause"
                        Height="40"
                        Margin="30,0"
                        Padding="20,10"
                        Click="Btn_pauseClick"
                        Style="{DynamicResource AccentedSquareButtonStyle}" />
                    <Button
                        x:Name="btn_stop"
                        Height="40"
                        Margin="30,0"
                        Padding="20,10"
                        Click="Btn_stopClick"
                        Style="{DynamicResource AccentedSquareButtonStyle}" />
                </WrapPanel>
            </StackPanel>

            <StackPanel
                Grid.Row="3"
                Grid.Column="1"
                HorizontalAlignment="Right">
                <Slider
                    Name="volumeSlider"
                    Width="200"
                    Height="40"
                    Margin="10,0"
                    HorizontalAlignment="Right"
                    VerticalAlignment="Center"
                    HorizontalContentAlignment="Right"
                    Maximum="1"
                    Minimum="0"
                    ValueChanged="ChangeMediaVolume"
                    Value="1" />
            </StackPanel>
        </Grid>
    </Grid>
</UserControl>

----------------------------------------------------------------------------------------------------------------

using GoldenSystem.Classes;
using GoldenSystem.GlobalOperations;
using MahApps.Metro.Controls;
using Newtonsoft.Json;
using Org.BouncyCastle.Asn1;
using System;
using System.IO;
using System.Timers;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;

// This is Template Is Customized For Play Video
namespace GoldenSystem.Pages {

    public partial class TemplateVideoPage : UserControl {

        /// <summary>
        /// Standartized declaring static page data for global vorking with pages
        /// </summary>
        public static DataViewSupport dataViewSupport = new DataViewSupport();

        public static TemplateClassList selectedRecord = new TemplateClassList();

        private bool userIsDraggingSlider = false;
        private readonly Timer timer1Sec = new Timer() { Enabled = false, Interval = 1000 };

        public TemplateVideoPage() {
            InitializeComponent();
            Language defaultLanguage = JsonConvert.DeserializeObject<Language>(App.Setting.DefaultLanguage);
            _ = SystemOperations.SetLanguageDictionary(Resources, defaultLanguage.Value);

            btn_play.Content = Resources["play"].ToString();
            btn_pause.Content = Resources["pause"].ToString();
            btn_stop.Content = Resources["stop"].ToString();

            timer1Sec.Elapsed += Timer1sec_Elapsed;
            me_videPlayer.Source = new Uri(Path.Combine(App.startupPath, "Data", "speed.mp4"));
        }

        private void Timer1sec_Elapsed(object sender, ElapsedEventArgs e) {
            this.Invoke(() =>
            {
                if (me_videPlayer.NaturalDuration.HasTimeSpan & !userIsDraggingSlider)
                {
                    s_timelineSlider.Minimum = 0;
                    s_timelineSlider.Maximum = me_videPlayer.NaturalDuration.TimeSpan.TotalSeconds;
                    s_timelineSlider.Value = me_videPlayer.Position.TotalSeconds;
                }
            });
        }

        private void Btn_playClick(object sender, RoutedEventArgs e) {
            me_videPlayer.Play();
            timer1Sec.Enabled = true;
            InitializePropertyValues();
        }

        private void Btn_pauseClick(object sender, RoutedEventArgs e) {
            me_videPlayer.Pause();
            timer1Sec.Enabled = false;
        }

        private void Btn_stopClick(object sender, RoutedEventArgs e) {
            me_videPlayer.Stop();
            me_videPlayer.Position = TimeSpan.FromSeconds(0);
            timer1Sec.Enabled = false;
        }

        private void SliProgress_DragStarted(object sender, DragStartedEventArgs e) {
            userIsDraggingSlider = true;
        }

        private void SliProgress_DragCompleted(object sender, DragCompletedEventArgs e) {
            userIsDraggingSlider = false;
            me_videPlayer.Position = TimeSpan.FromSeconds(s_timelineSlider.Value);
        }

        private void VidePlayerMediaEnded(object sender, EventArgs e) {
            me_videPlayer.Stop();
            timer1Sec.Enabled = false;
        }

        private void InitializePropertyValues() {
            me_videPlayer.Volume = (double)volumeSlider.Value;
        }

        private void ChangeMediaVolume(object sender, RoutedPropertyChangedEventArgs<double> args) {
            me_videPlayer.Volume = (double)volumeSlider.Value;
        }

        #region helper methods

        private class ExtensionsItem {

            public ExtensionsItem() {
                ident = null;
                isTrue = false;
                asn1OctetString = null;
            }

            public DerObjectIdentifier ident { get; set; }
            public bool isTrue { get; set; }
            public Asn1OctetString asn1OctetString { get; set; }
        }

        #endregion helper methods
    }
}
```    
			
---   
			### XAML Samotný Přehled     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.TemplateClassListAutoDBTranslationViewPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:behaviors="clr-namespace:GoldenSystem.Pages"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:dragablz="clr-namespace:Dragablz;assembly=Dragablz"
    xmlns:globalization="clr-namespace:System.Globalization;assembly=mscorlib"
    xmlns:i="http://schemas.microsoft.com/expression/2010/interactivity"
    xmlns:iconPacks="http://metro.mahapps.com/winfx/xaml/iconpacks"
    xmlns:local="clr-namespace:GoldenSystem"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:sys="clr-namespace:System;assembly=mscorlib"
    xmlns:xctk="http://schemas.xceed.com/wpf/xaml/toolkit"
    Name="View"
    HorizontalAlignment="Stretch"
    VerticalAlignment="Stretch"
    d:DesignHeight="500"
    d:DesignWidth="600"
    Tag="View"
    mc:Ignorable="d">

    <Grid
        Margin="0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch"
        Background="{DynamicResource AccentColorBrush}">
        <Grid x:Name="ListView" Visibility="Visible">
            <DataGrid
                x:Name="DgListView"
                Width="{Binding Path=ActualWidth, ElementName=View}"
                Height="{Binding Path=ActualHeight, ElementName=View}"
                HorizontalAlignment="Left" VerticalAlignment="Top" AutoGenerateColumns="True" AutoGeneratedColumns="DgListView_Translate" IsReadOnly="True"
                MouseDoubleClick="DgListView_MouseDoubleClick" SelectionChanged="DgListView_SelectionChanged" SelectionMode="Single" />
        </Grid>
    </Grid>
</UserControl>

----------------------------------------------------------------------------------------------------------------

using GoldenSystem.Api;
using GoldenSystem.Classes;
using GoldenSystem.GlobalOperations;
using GoldenSystem.GlobalStyles;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace GoldenSystem.Pages {


    public partial class TemplateClassListAutoDBTranslationViewPage : UserControl {


        public static DataViewSupport dataViewSupport = new DataViewSupport();

        public static TemplateClassList selectedRecord = new TemplateClassList();


        public TemplateClassListAutoDBTranslationViewPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, JsonConvert.DeserializeObject<Language>(App.Setting.DefaultLanguage).Value);

            _ = LoadDataList();
            SetRecord();
        }


        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try { if (MainWindow.serviceRunning) DgListView.ItemsSource = await CommApi.GetApiRequest<List<TemplateClassList>>(ApiUrls.GoldenSystemTemplateClassList, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token); }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }


        private async void DgListView_Translate(object sender, EventArgs ex) {
            try
            {
                ((DataGrid)sender).Columns.ToList().ForEach(async e =>
                {
                    string headername = e.Header.ToString();
                    if (headername == "Active") { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = DatagridStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 2; }
                    else if (headername == "Timestamp") { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = DatagridStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 1; }

                    else if (headername == "Id") e.DisplayIndex = 0;
                    else if (headername == "UserId") e.Visibility = Visibility.Hidden;
                });
            }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }


        public void Filter(string filter) {
            try
            {
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) =>
                {
                    TemplateClassList user = e as TemplateClassList;
                    return user.SystemName.ToLower().Contains(filter.ToLower())
                    || user.Description.ToLower().Contains(filter.ToLower());
                };
            }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }


        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            if (DgListView.SelectedItems.Count == 0) return;
            selectedRecord = (TemplateClassList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord();
        }


        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0)
            { selectedRecord = (TemplateClassList)DgListView.SelectedItem; }
            else { selectedRecord = new TemplateClassList(); }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord();
        }


        private void SetRecord() {
            MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = false; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = true;
            ListView.Visibility = Visibility.Visible; dataViewSupport.FormShown = false;
        }
    }
}
```    
			
---   
			### XAML Šablona Přehled + Formulář     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.TemplateClassListAutoDBTranslationPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:local="clr-namespace:GoldenSystem.Pages"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:xctk="http://schemas.xceed.com/wpf/xaml/toolkit"
    Name="Form"
    HorizontalAlignment="Stretch"
    VerticalAlignment="Stretch"
    d:DesignHeight="500"
    d:DesignWidth="600"
    Tag="Form"
    mc:Ignorable="d">

    <Grid
        Margin="0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch"
        Background="{DynamicResource AccentColorBrush}">
        <Grid x:Name="ListView" Visibility="Visible">
            <DataGrid
                x:Name="DgListView"
                Width="{Binding Path=ActualWidth, ElementName=Form}"
                Height="{Binding Path=ActualHeight, ElementName=Form}"
                HorizontalAlignment="Left" VerticalAlignment="Top" AutoGenerateColumns="True" AutoGeneratedColumns="DgListView_Translate" IsReadOnly="True"
                MouseDoubleClick="DgListView_MouseDoubleClick" SelectionChanged="DgListView_SelectionChanged" SelectionMode="Single" />
        </Grid>

        <Grid
            x:Name="ListForm"
            Background="{DynamicResource WhiteBrush}"
            Visibility="Visible">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="300" />
                <ColumnDefinition Width="*" />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="80" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="*" />
                <RowDefinition Height="110" />
            </Grid.RowDefinitions>

            <Label
                x:Name="lbl_id" Grid.Row="0" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <Controls:NumericUpDown
                x:Name="txt_id" Grid.Row="0" Grid.Column="1" Margin="0,2,0,2" HorizontalContentAlignment="Left"
                Controls:TextBoxHelper.ClearTextButton="False" Controls:TextBoxHelper.Watermark="" HideUpDownButtons="True" IsEnabled="False" ToolTip="This unique identificator is read only value which is filled automatically by system" />

            <Label
                x:Name="lbl_systemName" Grid.Row="1" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <TextBox
                x:Name="txt_systemName" Grid.Row="1" Grid.Column="1" Margin="0,2,0,2" Controls:TextBoxHelper.ClearTextButton="true"
                Controls:TextBoxHelper.IsWaitingForData="True" Controls:TextBoxHelper.Watermark="" ToolTip="" />

            <Label
                x:Name="lbl_description" Grid.Row="2" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <TextBox
                x:Name="txt_description" Grid.Row="2" Grid.Column="1" Margin="0,2,0,2" Controls:TextBoxHelper.ClearTextButton="True"
                Controls:TextBoxHelper.Watermark="" AcceptsReturn="True" TextWrapping="Wrap" VerticalScrollBarVisibility="Visible" />

            <Label
                x:Name="lbl_active" Grid.Row="3" Grid.Column="0" HorizontalAlignment="Right" HorizontalContentAlignment="Right" />
            <CheckBox
                x:Name="chb_active" Grid.Row="3" Grid.Column="1" VerticalAlignment="Center" />

            <Button
                Name="btn_save" Grid.Row="5" Grid.Column="0" Width="200" Height="40"
                Margin="44,21,0,44" HorizontalAlignment="Left" VerticalAlignment="Bottom" Click="BtnSave_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />
            <Button
                Name="btn_cancel" Grid.Row="5" Grid.Column="1" Width="200" Height="40"
                Margin="44,21,44,44" HorizontalAlignment="Right" VerticalAlignment="Bottom" Click="BtnCancel_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />
        </Grid>
    </Grid>
</UserControl>

----------------------------------------------------------------------------------------------------------------

using GoldenSystem.Api;
using GoldenSystem.Classes;
using GoldenSystem.GlobalOperations;
using GoldenSystem.GlobalStyles;
using MahApps.Metro.Controls.Dialogs;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace GoldenSystem.Pages {

    public partial class TemplateClassListAutoDBTranslationPage : UserControl {

        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static TemplateClassList selectedRecord = new TemplateClassList();


        public TemplateClassListAutoDBTranslationPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, JsonConvert.DeserializeObject<Language>(App.Setting.DefaultLanguage).Value);

            try {
                DataOperations.TranslateFormFields(ref ListForm);
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            _ = LoadDataList();
            SetRecord(false);
        }


        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try { 

                DgListView.ItemsSource = await CommApi.GetApiRequest<List<TemplateClassList>>(ApiUrls.GoldenSystemTemplateClassList, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token); 
            
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }


        private async void DgListView_Translate(object sender, EventArgs ex) {
            try {
                ((DataGrid)sender).Columns.ToList().ForEach(async e => {
                    string headername = e.Header.ToString();
                    if (headername == "SystemName") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 1; }
                    else if (headername == "Description") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 2; }

                    else if (headername == "Active") { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = DatagridStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 2; }
                    else if (headername == "Timestamp") { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = DatagridStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 1; }

                    else if (headername == "Id") e.DisplayIndex = 0;
                    else if (headername == "UserId") e.Visibility = Visibility.Hidden;
                });
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }


        public void Filter(string filter) {
            try {
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) => {
                    TemplateClassList user = e as TemplateClassList;
                    return user.SystemName.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(user.Description) && user.Description.ToLower().Contains(filter.ToLower());
                };
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }


        public void NewRecord() {
            selectedRecord = new TemplateClassList();
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }


        public void EditRecord(bool copy) {
            selectedRecord = (TemplateClassList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }


        public async void DeleteRecord() {
            selectedRecord = (TemplateClassList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + selectedRecord.Id.ToString(), true);
            if (result == MessageDialogResult.Affirmative) {
                DBResultMessage dBResult = await CommApi.DeleteApiRequest(ApiUrls.GoldenSystemTemplateClassList, selectedRecord.Id.ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage);
                await LoadDataList(); SetRecord(false);
            }
        }


        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            if (DgListView.SelectedItems.Count == 0) return;
            selectedRecord = (TemplateClassList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }


        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0) { selectedRecord = (TemplateClassList)DgListView.SelectedItem; }
            else { selectedRecord = new TemplateClassList(); }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(false);
        }


        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            try {
                DBResultMessage dBResult;
                selectedRecord.Id = (int)((txt_id.Value != null) ? txt_id.Value : 0);
                selectedRecord.SystemName = txt_systemName.Text;
                selectedRecord.Description = txt_description.Text;
                selectedRecord.UserId = App.UserData.Authentification.Id;
                selectedRecord.Active = (bool)chb_active.IsChecked;
                selectedRecord.TimeStamp = DateTimeOffset.Now.DateTime;


                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0) {  dBResult = await CommApi.PutApiRequest(ApiUrls.GoldenSystemTemplateClassList, httpContent, null, App.UserData.Authentification.Token);
                } else { dBResult = await CommApi.PostApiRequest(ApiUrls.GoldenSystemTemplateClassList, httpContent, null, App.UserData.Authentification.Token); }

                if (dBResult.RecordCount > 0) { selectedRecord = new TemplateClassList(); await LoadDataList(); SetRecord(false); }
                else { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }


        private void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (TemplateClassList)DgListView.SelectedItem : new TemplateClassList();
            SetRecord(false);
        }


        private void SetRecord(bool showForm, bool copy = false) {
            txt_id.Value = (copy) ? 0 : selectedRecord.Id;
            txt_systemName.Text = selectedRecord.SystemName;
            txt_description.Text = selectedRecord.Description;
            chb_active.IsChecked = (selectedRecord.Id == 0) ? App.Setting.ActiveNewInputDefault : selectedRecord.Active;

            if (showForm) {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = false;
                ListView.Visibility = Visibility.Hidden; ListForm.Visibility = Visibility.Visible; dataViewSupport.FormShown = true;
            }
            else {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = true;
                ListForm.Visibility = Visibility.Hidden; ListView.Visibility = Visibility.Visible; dataViewSupport.FormShown = false;
            }
        }
    }
}


```    
			
---   
			### XAML Šetřič Obrazovky     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.ScreenSaverPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    x:Name="screenSaverPage"
    MinWidth="1024"
    MinHeight="768"
    MaxWidth="1024"
    MaxHeight="768"
    AllowDrop="True"
    mc:Ignorable="d">

    <UserControl.Resources>
        <Storyboard x:Key="RotateStoryboard">
            <ParallelTimeline
                RepeatBehavior="Forever" Storyboard.TargetName="myRotateInner" Storyboard.TargetProperty="Angle">
                <DoubleAnimation
                    From="0" To="360" Duration="0:0:20" />
            </ParallelTimeline>
            <ParallelTimeline
                RepeatBehavior="Forever" Storyboard.TargetName="myRotateOuter" Storyboard.TargetProperty="Angle">
                <DoubleAnimation
                    From="0" To="360" Duration="0:0:30" />
            </ParallelTimeline>
        </Storyboard>

        <MeshGeometry3D
            x:Key="PlaneMesh" Normals="0 0 1  0 0 1  0 0 1  0 0 1" Positions="-1 -1 0  1 -1 0  -1 1 0  1 1 0" TextureCoordinates="0 1  1 1  0 0  1 0   " TriangleIndices="0 1 2  1 3 2" />

        <MeshGeometry3D
            x:Key="CubeMesh" Normals="0,0,-1 0,0,-1 0,0,-1 0,0,-1 0,0,-1 0,0,-1 0,0,1 0,0,1 0,0,1 0,0,1 0,0,1 0,0,1 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 1,0,0 1,0,0 1,0,0 1,0,0 1,0,0 1,0,0 0,1,0 0,1,0 0,1,0 0,1,0 0,1,0 0,1,0 -1,0,0 -1,0,0 -1,0,0 -1,0,0 -1,0,0 -1,0,0 " Positions="-0.5,-0.5,-0.5 -0.5,0.5,-0.5 0.5,0.5,-0.5 0.5,0.5,-0.5 0.5,-0.5,-0.5 -0.5,-0.5,-0.5 -0.5,-0.5,0.5 0.5,-0.5,0.5 0.5,0.5,0.5 0.5,0.5,0.5 -0.5,0.5,0.5 -0.5,-0.5,0.5 -0.5,-0.5,-0.5 0.5,-0.5,-0.5 0.5,-0.5,0.5 0.5,-0.5,0.5 -0.5,-0.5,0.5 -0.5,-0.5,-0.5 0.5,-0.5,-0.5 0.5,0.5,-0.5 0.5,0.5,0.5 0.5,0.5,0.5 0.5,-0.5,0.5 0.5,-0.5,-0.5 0.5,0.5,-0.5 -0.5,0.5,-0.5 -0.5,0.5,0.5 -0.5,0.5,0.5 0.5,0.5,0.5 0.5,0.5,-0.5 -0.5,0.5,-0.5 -0.5,-0.5,-0.5 -0.5,-0.5,0.5 -0.5,-0.5,0.5 -0.5,0.5,0.5 -0.5,0.5,-0.5 " TextureCoordinates="1,0 1,1 0,1 0,1 0,0 1,0 0,0 1,0 1,1 1,1 0,1 0,0 0,0 1,0 1,1 1,1 0,1 0,0 1,0 1,1 0,1 0,1 0,0 1,0 1,1 0,1 0,0 0,0 1,0 1,1 0,1 0,0 1,0 1,0 1,1 0,1 " TriangleIndices="0,1,2 3,4,5 6,7,8 9,10,11 12,13,14 15,16,17 18,19,20 21,22,23 24,25,26 27,28,29 30,31,32 33,34,35 " />

        <MeshGeometry3D
            x:Key="Sphere8X8" Normals="0.270598,0.92388,0.270598 0.382683,0.92388,0 0,1,0 2.34318e-017,0.92388,0.382683 0,1,0 -0.270598,0.92388,0.270598 0,1,0 -0.382683,0.92388,4.68637e-017 0,1,0 -0.270598,0.92388,-0.270598 0,1,0 -7.02955e-017,0.92388,-0.382683 0,1,0 0.270598,0.92388,-0.270598 0,1,0 0.382683,0.92388,0 0,1,0 0.5,0.707107,0.5 0.707107,0.707107,0 0.382683,0.92388,0 0.270598,0.92388,0.270598 4.32964e-017,0.707107,0.707107 2.34318e-017,0.92388,0.382683 -0.5,0.707107,0.5 -0.270598,0.92388,0.270598 -0.707107,0.707107,8.65927e-017 -0.382683,0.92388,4.68637e-017 -0.5,0.707107,-0.5 -0.270598,0.92388,-0.270598 -1.29889e-016,0.707107,-0.707107 -7.02955e-017,0.92388,-0.382683 0.5,0.707107,-0.5 0.270598,0.92388,-0.270598 0.707107,0.707107,0 0.382683,0.92388,0 0.653282,0.382683,0.653282 0.92388,0.382683,0 5.65694e-017,0.382683,0.92388 -0.653282,0.382683,0.653282 -0.92388,0.382683,1.13139e-016 -0.653282,0.382683,-0.653282 -1.69708e-016,0.382683,-0.92388 0.653282,0.382683,-0.653282 0.92388,0.382683,0 0.707107,0,0.707107 1,0,0 6.12303e-017,0,1 -0.707107,0,0.707107 -1,0,1.22461e-016 -0.707107,0,-0.707107 -1.83691e-016,0,-1 0.707107,0,-0.707107 1,0,0 0.653282,-0.382683,0.653282 0.92388,-0.382683,0 5.65694e-017,-0.382683,0.92388 -0.653282,-0.382683,0.653282 -0.92388,-0.382683,1.13139e-016 -0.653282,-0.382683,-0.653282 -1.69708e-016,-0.382683,-0.92388 0.653282,-0.382683,-0.653282 0.92388,-0.382683,0 0.5,-0.707107,0.5 0.707107,-0.707107,0 4.32964e-017,-0.707107,0.707107 -0.5,-0.707107,0.5 -0.707107,-0.707107,8.65927e-017 -0.5,-0.707107,-0.5 -1.29889e-016,-0.707107,-0.707107 0.5,-0.707107,-0.5 0.707107,-0.707107,0 0.270598,-0.92388,0.270598 0.382683,-0.92388,0 2.34318e-017,-0.92388,0.382683 -0.270598,-0.92388,0.270598 -0.382683,-0.92388,4.68637e-017 -0.270598,-0.92388,-0.270598 -7.02955e-017,-0.92388,-0.382683 0.270598,-0.92388,-0.270598 0.382683,-0.92388,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 " Positions="0.135299,0.46194,0.135299 0.191342,0.46194,0 0,0.5,0 1.17159e-017,0.46194,0.191342 0,0.5,0 -0.135299,0.46194,0.135299 0,0.5,0 -0.191342,0.46194,2.34318e-017 0,0.5,0 -0.135299,0.46194,-0.135299 0,0.5,0 -3.51477e-017,0.46194,-0.191342 0,0.5,0 0.135299,0.46194,-0.135299 0,0.5,0 0.191342,0.46194,0 0,0.5,0 0.25,0.353553,0.25 0.353553,0.353553,0 0.191342,0.46194,0 0.135299,0.46194,0.135299 2.16482e-017,0.353553,0.353553 1.17159e-017,0.46194,0.191342 -0.25,0.353553,0.25 -0.135299,0.46194,0.135299 -0.353553,0.353553,4.32964e-017 -0.191342,0.46194,2.34318e-017 -0.25,0.353553,-0.25 -0.135299,0.46194,-0.135299 -6.49446e-017,0.353553,-0.353553 -3.51477e-017,0.46194,-0.191342 0.25,0.353553,-0.25 0.135299,0.46194,-0.135299 0.353553,0.353553,0 0.191342,0.46194,0 0.326641,0.191342,0.326641 0.46194,0.191342,0 2.82847e-017,0.191342,0.46194 -0.326641,0.191342,0.326641 -0.46194,0.191342,5.65694e-017 -0.326641,0.191342,-0.326641 -8.48542e-017,0.191342,-0.46194 0.326641,0.191342,-0.326641 0.46194,0.191342,0 0.353553,0,0.353553 0.5,0,0 3.06152e-017,0,0.5 -0.353553,0,0.353553 -0.5,0,6.12303e-017 -0.353553,0,-0.353553 -9.18455e-017,0,-0.5 0.353553,0,-0.353553 0.5,0,0 0.326641,-0.191342,0.326641 0.46194,-0.191342,0 2.82847e-017,-0.191342,0.46194 -0.326641,-0.191342,0.326641 -0.46194,-0.191342,5.65694e-017 -0.326641,-0.191342,-0.326641 -8.48542e-017,-0.191342,-0.46194 0.326641,-0.191342,-0.326641 0.46194,-0.191342,0 0.25,-0.353553,0.25 0.353553,-0.353553,0 2.16482e-017,-0.353553,0.353553 -0.25,-0.353553,0.25 -0.353553,-0.353553,4.32964e-017 -0.25,-0.353553,-0.25 -6.49446e-017,-0.353553,-0.353553 0.25,-0.353553,-0.25 0.353553,-0.353553,0 0.135299,-0.46194,0.135299 0.191342,-0.46194,0 1.17159e-017,-0.46194,0.191342 -0.135299,-0.46194,0.135299 -0.191342,-0.46194,2.34318e-017 -0.135299,-0.46194,-0.135299 -3.51477e-017,-0.46194,-0.191342 0.135299,-0.46194,-0.135299 0.191342,-0.46194,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 " TextureCoordinates="0.86625,0.87625 0.99,0.87625 0.928125,0.99 0.7425,0.87625 0.804375,0.99 0.61875,0.87625 0.680625,0.99 0.495,0.87625 0.556875,0.99 0.37125,0.87625 0.433125,0.99 0.2475,0.87625 0.309375,0.99 0.12375,0.87625 0.185625,0.99 0,0.87625 0.061875,0.99 0.86625,0.7425 0.99,0.7425 0.99,0.86625 0.86625,0.86625 0.7425,0.7425 0.7425,0.86625 0.61875,0.7425 0.61875,0.86625 0.495,0.7425 0.495,0.86625 0.37125,0.7425 0.37125,0.86625 0.2475,0.7425 0.2475,0.86625 0.12375,0.7425 0.12375,0.86625 0,0.7425 0,0.86625 0.86625,0.61875 0.99,0.61875 0.7425,0.61875 0.61875,0.61875 0.495,0.61875 0.37125,0.61875 0.2475,0.61875 0.12375,0.61875 0,0.61875 0.86625,0.495 0.99,0.495 0.7425,0.495 0.61875,0.495 0.495,0.495 0.37125,0.495 0.2475,0.495 0.12375,0.495 0,0.495 0.86625,0.37125 0.99,0.37125 0.7425,0.37125 0.61875,0.37125 0.495,0.37125 0.37125,0.37125 0.2475,0.37125 0.12375,0.37125 0,0.37125 0.86625,0.2475 0.99,0.2475 0.7425,0.2475 0.61875,0.2475 0.495,0.2475 0.37125,0.2475 0.2475,0.2475 0.12375,0.2475 0,0.2475 0.86625,0.12375 0.99,0.12375 0.7425,0.12375 0.61875,0.12375 0.495,0.12375 0.37125,0.12375 0.2475,0.12375 0.12375,0.12375 0,0.12375 0.928125,0 0.804375,0 0.680625,0 0.556875,0 0.433125,0 0.309375,0 0.185625,0 0.061875,0 " TriangleIndices="0,1,2 3,0,4 5,3,6 7,5,8 9,7,10 11,9,12 13,11,14 15,13,16 17,18,19 19,20,17 21,17,20 20,22,21 23,21,22 22,24,23 25,23,24 24,26,25 27,25,26 26,28,27 29,27,28 28,30,29 31,29,30 30,32,31 33,31,32 32,34,33 35,36,18 18,17,35 37,35,17 17,21,37 38,37,21 21,23,38 39,38,23 23,25,39 40,39,25 25,27,40 41,40,27 27,29,41 42,41,29 29,31,42 43,42,31 31,33,43 44,45,36 36,35,44 46,44,35 35,37,46 47,46,37 37,38,47 48,47,38 38,39,48 49,48,39 39,40,49 50,49,40 40,41,50 51,50,41 41,42,51 52,51,42 42,43,52 53,54,45 45,44,53 55,53,44 44,46,55 56,55,46 46,47,56 57,56,47 47,48,57 58,57,48 48,49,58 59,58,49 49,50,59 60,59,50 50,51,60 61,60,51 51,52,61 62,63,54 54,53,62 64,62,53 53,55,64 65,64,55 55,56,65 66,65,56 56,57,66 67,66,57 57,58,67 68,67,58 58,59,68 69,68,59 59,60,69 70,69,60 60,61,70 71,72,63 63,62,71 73,71,62 62,64,73 74,73,64 64,65,74 75,74,65 65,66,75 76,75,66 66,67,76 77,76,67 67,68,77 78,77,68 68,69,78 79,78,69 69,70,79 80,72,71 81,71,73 82,73,74 83,74,75 84,75,76 85,76,77 86,77,78 87,78,79 " />

        <MeshGeometry3D
            x:Key="Sphere16x16" Normals="0.18024,0.980785,0.0746578 0.19509,0.980785,0 0,1,0 0.13795,0.980785,0.13795 0,1,0 0.0746578,0.980785,0.18024 0,1,0 1.19454e-017,0.980785,0.19509 0,1,0 -0.0746578,0.980785,0.18024 0,1,0 -0.13795,0.980785,0.13795 0,1,0 -0.18024,0.980785,0.0746578 0,1,0 -0.19509,0.980785,2.38909e-017 0,1,0 -0.18024,0.980785,-0.0746578 0,1,0 -0.13795,0.980785,-0.13795 0,1,0 -0.0746578,0.980785,-0.18024 0,1,0 -3.58363e-017,0.980785,-0.19509 0,1,0 0.0746578,0.980785,-0.18024 0,1,0 0.13795,0.980785,-0.13795 0,1,0 0.18024,0.980785,-0.0746578 0,1,0 0.19509,0.980785,0 0,1,0 0.353553,0.92388,0.146447 0.382683,0.92388,0 0.19509,0.980785,0 0.18024,0.980785,0.0746578 0.270598,0.92388,0.270598 0.13795,0.980785,0.13795 0.146447,0.92388,0.353553 0.0746578,0.980785,0.18024 2.34318e-017,0.92388,0.382683 1.19454e-017,0.980785,0.19509 -0.146447,0.92388,0.353553 -0.0746578,0.980785,0.18024 -0.270598,0.92388,0.270598 -0.13795,0.980785,0.13795 -0.353553,0.92388,0.146447 -0.18024,0.980785,0.0746578 -0.382683,0.92388,4.68637e-017 -0.19509,0.980785,2.38909e-017 -0.353553,0.92388,-0.146447 -0.18024,0.980785,-0.0746578 -0.270598,0.92388,-0.270598 -0.13795,0.980785,-0.13795 -0.146447,0.92388,-0.353553 -0.0746578,0.980785,-0.18024 -7.02955e-017,0.92388,-0.382683 -3.58363e-017,0.980785,-0.19509 0.146447,0.92388,-0.353553 0.0746578,0.980785,-0.18024 0.270598,0.92388,-0.270598 0.13795,0.980785,-0.13795 0.353553,0.92388,-0.146447 0.18024,0.980785,-0.0746578 0.382683,0.92388,0 0.19509,0.980785,0 0.51328,0.83147,0.212608 0.55557,0.83147,0 0.392847,0.83147,0.392847 0.212608,0.83147,0.51328 3.40177e-017,0.83147,0.55557 -0.212608,0.83147,0.51328 -0.392847,0.83147,0.392847 -0.51328,0.83147,0.212608 -0.55557,0.83147,6.80355e-017 -0.51328,0.83147,-0.212608 -0.392847,0.83147,-0.392847 -0.212608,0.83147,-0.51328 -1.02053e-016,0.83147,-0.55557 0.212608,0.83147,-0.51328 0.392847,0.83147,-0.392847 0.51328,0.83147,-0.212608 0.55557,0.83147,0 0.653282,0.707107,0.270598 0.707107,0.707107,0 0.5,0.707107,0.5 0.270598,0.707107,0.653282 4.32964e-017,0.707107,0.707107 -0.270598,0.707107,0.653282 -0.5,0.707107,0.5 -0.653282,0.707107,0.270598 -0.707107,0.707107,8.65927e-017 -0.653282,0.707107,-0.270598 -0.5,0.707107,-0.5 -0.270598,0.707107,-0.653282 -1.29889e-016,0.707107,-0.707107 0.270598,0.707107,-0.653282 0.5,0.707107,-0.5 0.653282,0.707107,-0.270598 0.707107,0.707107,0 0.768178,0.55557,0.31819 0.83147,0.55557,0 0.587938,0.55557,0.587938 0.31819,0.55557,0.768178 5.09111e-017,0.55557,0.83147 -0.31819,0.55557,0.768178 -0.587938,0.55557,0.587938 -0.768178,0.55557,0.31819 -0.83147,0.55557,1.01822e-016 -0.768178,0.55557,-0.31819 -0.587938,0.55557,-0.587938 -0.31819,0.55557,-0.768178 -1.52733e-016,0.55557,-0.83147 0.31819,0.55557,-0.768178 0.587938,0.55557,-0.587938 0.768178,0.55557,-0.31819 0.83147,0.55557,0 0.853553,0.382683,0.353553 0.92388,0.382683,0 0.653282,0.382683,0.653282 0.353553,0.382683,0.853553 5.65694e-017,0.382683,0.92388 -0.353553,0.382683,0.853553 -0.653282,0.382683,0.653282 -0.853553,0.382683,0.353553 -0.92388,0.382683,1.13139e-016 -0.853553,0.382683,-0.353553 -0.653282,0.382683,-0.653282 -0.353553,0.382683,-0.853553 -1.69708e-016,0.382683,-0.92388 0.353553,0.382683,-0.853553 0.653282,0.382683,-0.653282 0.853553,0.382683,-0.353553 0.92388,0.382683,0 0.906127,0.19509,0.37533 0.980785,0.19509,0 0.69352,0.19509,0.69352 0.37533,0.19509,0.906127 6.00538e-017,0.19509,0.980785 -0.37533,0.19509,0.906127 -0.69352,0.19509,0.69352 -0.906127,0.19509,0.37533 -0.980785,0.19509,1.20108e-016 -0.906127,0.19509,-0.37533 -0.69352,0.19509,-0.69352 -0.37533,0.19509,-0.906127 -1.80161e-016,0.19509,-0.980785 0.37533,0.19509,-0.906127 0.69352,0.19509,-0.69352 0.906127,0.19509,-0.37533 0.980785,0.19509,0 0.92388,0,0.382683 1,0,0 0.707107,0,0.707107 0.382683,0,0.92388 6.12303e-017,0,1 -0.382683,0,0.92388 -0.707107,0,0.707107 -0.92388,0,0.382683 -1,0,1.22461e-016 -0.92388,0,-0.382683 -0.707107,0,-0.707107 -0.382683,0,-0.92388 -1.83691e-016,0,-1 0.382683,0,-0.92388 0.707107,0,-0.707107 0.92388,0,-0.382683 1,0,0 0.906127,-0.19509,0.37533 0.980785,-0.19509,0 0.69352,-0.19509,0.69352 0.37533,-0.19509,0.906127 6.00538e-017,-0.19509,0.980785 -0.37533,-0.19509,0.906127 -0.69352,-0.19509,0.69352 -0.906127,-0.19509,0.37533 -0.980785,-0.19509,1.20108e-016 -0.906127,-0.19509,-0.37533 -0.69352,-0.19509,-0.69352 -0.37533,-0.19509,-0.906127 -1.80161e-016,-0.19509,-0.980785 0.37533,-0.19509,-0.906127 0.69352,-0.19509,-0.69352 0.906127,-0.19509,-0.37533 0.980785,-0.19509,0 0.853553,-0.382683,0.353553 0.92388,-0.382683,0 0.653282,-0.382683,0.653282 0.353553,-0.382683,0.853553 5.65694e-017,-0.382683,0.92388 -0.353553,-0.382683,0.853553 -0.653282,-0.382683,0.653282 -0.853553,-0.382683,0.353553 -0.92388,-0.382683,1.13139e-016 -0.853553,-0.382683,-0.353553 -0.653282,-0.382683,-0.653282 -0.353553,-0.382683,-0.853553 -1.69708e-016,-0.382683,-0.92388 0.353553,-0.382683,-0.853553 0.653282,-0.382683,-0.653282 0.853553,-0.382683,-0.353553 0.92388,-0.382683,0 0.768178,-0.55557,0.31819 0.83147,-0.55557,0 0.587938,-0.55557,0.587938 0.31819,-0.55557,0.768178 5.09111e-017,-0.55557,0.83147 -0.31819,-0.55557,0.768178 -0.587938,-0.55557,0.587938 -0.768178,-0.55557,0.31819 -0.83147,-0.55557,1.01822e-016 -0.768178,-0.55557,-0.31819 -0.587938,-0.55557,-0.587938 -0.31819,-0.55557,-0.768178 -1.52733e-016,-0.55557,-0.83147 0.31819,-0.55557,-0.768178 0.587938,-0.55557,-0.587938 0.768178,-0.55557,-0.31819 0.83147,-0.55557,0 0.653282,-0.707107,0.270598 0.707107,-0.707107,0 0.5,-0.707107,0.5 0.270598,-0.707107,0.653282 4.32964e-017,-0.707107,0.707107 -0.270598,-0.707107,0.653282 -0.5,-0.707107,0.5 -0.653282,-0.707107,0.270598 -0.707107,-0.707107,8.65927e-017 -0.653282,-0.707107,-0.270598 -0.5,-0.707107,-0.5 -0.270598,-0.707107,-0.653282 -1.29889e-016,-0.707107,-0.707107 0.270598,-0.707107,-0.653282 0.5,-0.707107,-0.5 0.653282,-0.707107,-0.270598 0.707107,-0.707107,0 0.51328,-0.83147,0.212608 0.55557,-0.83147,0 0.392847,-0.83147,0.392847 0.212608,-0.83147,0.51328 3.40177e-017,-0.83147,0.55557 -0.212608,-0.83147,0.51328 -0.392847,-0.83147,0.392847 -0.51328,-0.83147,0.212608 -0.55557,-0.83147,6.80355e-017 -0.51328,-0.83147,-0.212608 -0.392847,-0.83147,-0.392847 -0.212608,-0.83147,-0.51328 -1.02053e-016,-0.83147,-0.55557 0.212608,-0.83147,-0.51328 0.392847,-0.83147,-0.392847 0.51328,-0.83147,-0.212608 0.55557,-0.83147,0 0.353553,-0.92388,0.146447 0.382683,-0.92388,0 0.270598,-0.92388,0.270598 0.146447,-0.92388,0.353553 2.34318e-017,-0.92388,0.382683 -0.146447,-0.92388,0.353553 -0.270598,-0.92388,0.270598 -0.353553,-0.92388,0.146447 -0.382683,-0.92388,4.68637e-017 -0.353553,-0.92388,-0.146447 -0.270598,-0.92388,-0.270598 -0.146447,-0.92388,-0.353553 -7.02955e-017,-0.92388,-0.382683 0.146447,-0.92388,-0.353553 0.270598,-0.92388,-0.270598 0.353553,-0.92388,-0.146447 0.382683,-0.92388,0 0.18024,-0.980785,0.0746578 0.19509,-0.980785,0 0.13795,-0.980785,0.13795 0.0746578,-0.980785,0.18024 1.19454e-017,-0.980785,0.19509 -0.0746578,-0.980785,0.18024 -0.13795,-0.980785,0.13795 -0.18024,-0.980785,0.0746578 -0.19509,-0.980785,2.38909e-017 -0.18024,-0.980785,-0.0746578 -0.13795,-0.980785,-0.13795 -0.0746578,-0.980785,-0.18024 -3.58363e-017,-0.980785,-0.19509 0.0746578,-0.980785,-0.18024 0.13795,-0.980785,-0.13795 0.18024,-0.980785,-0.0746578 0.19509,-0.980785,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 0,-1,0 " Positions="0.09012,0.490393,0.0373289 0.0975452,0.490393,0 0,0.5,0 0.0689748,0.490393,0.0689748 0,0.5,0 0.0373289,0.490393,0.09012 0,0.5,0 5.97272e-018,0.490393,0.0975452 0,0.5,0 -0.0373289,0.490393,0.09012 0,0.5,0 -0.0689748,0.490393,0.0689748 0,0.5,0 -0.09012,0.490393,0.0373289 0,0.5,0 -0.0975452,0.490393,1.19454e-017 0,0.5,0 -0.09012,0.490393,-0.0373289 0,0.5,0 -0.0689748,0.490393,-0.0689748 0,0.5,0 -0.0373289,0.490393,-0.09012 0,0.5,0 -1.79182e-017,0.490393,-0.0975452 0,0.5,0 0.0373289,0.490393,-0.09012 0,0.5,0 0.0689748,0.490393,-0.0689748 0,0.5,0 0.09012,0.490393,-0.0373289 0,0.5,0 0.0975452,0.490393,0 0,0.5,0 0.176777,0.46194,0.0732233 0.191342,0.46194,0 0.0975452,0.490393,0 0.09012,0.490393,0.0373289 0.135299,0.46194,0.135299 0.0689748,0.490393,0.0689748 0.0732233,0.46194,0.176777 0.0373289,0.490393,0.09012 1.17159e-017,0.46194,0.191342 5.97272e-018,0.490393,0.0975452 -0.0732233,0.46194,0.176777 -0.0373289,0.490393,0.09012 -0.135299,0.46194,0.135299 -0.0689748,0.490393,0.0689748 -0.176777,0.46194,0.0732233 -0.09012,0.490393,0.0373289 -0.191342,0.46194,2.34318e-017 -0.0975452,0.490393,1.19454e-017 -0.176777,0.46194,-0.0732233 -0.09012,0.490393,-0.0373289 -0.135299,0.46194,-0.135299 -0.0689748,0.490393,-0.0689748 -0.0732233,0.46194,-0.176777 -0.0373289,0.490393,-0.09012 -3.51477e-017,0.46194,-0.191342 -1.79182e-017,0.490393,-0.0975452 0.0732233,0.46194,-0.176777 0.0373289,0.490393,-0.09012 0.135299,0.46194,-0.135299 0.0689748,0.490393,-0.0689748 0.176777,0.46194,-0.0732233 0.09012,0.490393,-0.0373289 0.191342,0.46194,0 0.0975452,0.490393,0 0.25664,0.415735,0.106304 0.277785,0.415735,0 0.196424,0.415735,0.196424 0.106304,0.415735,0.25664 1.70089e-017,0.415735,0.277785 -0.106304,0.415735,0.25664 -0.196424,0.415735,0.196424 -0.25664,0.415735,0.106304 -0.277785,0.415735,3.40177e-017 -0.25664,0.415735,-0.106304 -0.196424,0.415735,-0.196424 -0.106304,0.415735,-0.25664 -5.10266e-017,0.415735,-0.277785 0.106304,0.415735,-0.25664 0.196424,0.415735,-0.196424 0.25664,0.415735,-0.106304 0.277785,0.415735,0 0.326641,0.353553,0.135299 0.353553,0.353553,0 0.25,0.353553,0.25 0.135299,0.353553,0.326641 2.16482e-017,0.353553,0.353553 -0.135299,0.353553,0.326641 -0.25,0.353553,0.25 -0.326641,0.353553,0.135299 -0.353553,0.353553,4.32964e-017 -0.326641,0.353553,-0.135299 -0.25,0.353553,-0.25 -0.135299,0.353553,-0.326641 -6.49446e-017,0.353553,-0.353553 0.135299,0.353553,-0.326641 0.25,0.353553,-0.25 0.326641,0.353553,-0.135299 0.353553,0.353553,0 0.384089,0.277785,0.159095 0.415735,0.277785,0 0.293969,0.277785,0.293969 0.159095,0.277785,0.384089 2.54556e-017,0.277785,0.415735 -0.159095,0.277785,0.384089 -0.293969,0.277785,0.293969 -0.384089,0.277785,0.159095 -0.415735,0.277785,5.09111e-017 -0.384089,0.277785,-0.159095 -0.293969,0.277785,-0.293969 -0.159095,0.277785,-0.384089 -7.63667e-017,0.277785,-0.415735 0.159095,0.277785,-0.384089 0.293969,0.277785,-0.293969 0.384089,0.277785,-0.159095 0.415735,0.277785,0 0.426777,0.191342,0.176777 0.46194,0.191342,0 0.326641,0.191342,0.326641 0.176777,0.191342,0.426777 2.82847e-017,0.191342,0.46194 -0.176777,0.191342,0.426777 -0.326641,0.191342,0.326641 -0.426777,0.191342,0.176777 -0.46194,0.191342,5.65694e-017 -0.426777,0.191342,-0.176777 -0.326641,0.191342,-0.326641 -0.176777,0.191342,-0.426777 -8.48542e-017,0.191342,-0.46194 0.176777,0.191342,-0.426777 0.326641,0.191342,-0.326641 0.426777,0.191342,-0.176777 0.46194,0.191342,0 0.453064,0.0975452,0.187665 0.490393,0.0975452,0 0.34676,0.0975452,0.34676 0.187665,0.0975452,0.453064 3.00269e-017,0.0975452,0.490393 -0.187665,0.0975452,0.453064 -0.34676,0.0975452,0.34676 -0.453064,0.0975452,0.187665 -0.490393,0.0975452,6.00538e-017 -0.453064,0.0975452,-0.187665 -0.34676,0.0975452,-0.34676 -0.187665,0.0975452,-0.453064 -9.00807e-017,0.0975452,-0.490393 0.187665,0.0975452,-0.453064 0.34676,0.0975452,-0.34676 0.453064,0.0975452,-0.187665 0.490393,0.0975452,0 0.46194,0,0.191342 0.5,0,0 0.353553,0,0.353553 0.191342,0,0.46194 3.06152e-017,0,0.5 -0.191342,0,0.46194 -0.353553,0,0.353553 -0.46194,0,0.191342 -0.5,0,6.12303e-017 -0.46194,0,-0.191342 -0.353553,0,-0.353553 -0.191342,0,-0.46194 -9.18455e-017,0,-0.5 0.191342,0,-0.46194 0.353553,0,-0.353553 0.46194,0,-0.191342 0.5,0,0 0.453064,-0.0975452,0.187665 0.490393,-0.0975452,0 0.34676,-0.0975452,0.34676 0.187665,-0.0975452,0.453064 3.00269e-017,-0.0975452,0.490393 -0.187665,-0.0975452,0.453064 -0.34676,-0.0975452,0.34676 -0.453064,-0.0975452,0.187665 -0.490393,-0.0975452,6.00538e-017 -0.453064,-0.0975452,-0.187665 -0.34676,-0.0975452,-0.34676 -0.187665,-0.0975452,-0.453064 -9.00807e-017,-0.0975452,-0.490393 0.187665,-0.0975452,-0.453064 0.34676,-0.0975452,-0.34676 0.453064,-0.0975452,-0.187665 0.490393,-0.0975452,0 0.426777,-0.191342,0.176777 0.46194,-0.191342,0 0.326641,-0.191342,0.326641 0.176777,-0.191342,0.426777 2.82847e-017,-0.191342,0.46194 -0.176777,-0.191342,0.426777 -0.326641,-0.191342,0.326641 -0.426777,-0.191342,0.176777 -0.46194,-0.191342,5.65694e-017 -0.426777,-0.191342,-0.176777 -0.326641,-0.191342,-0.326641 -0.176777,-0.191342,-0.426777 -8.48542e-017,-0.191342,-0.46194 0.176777,-0.191342,-0.426777 0.326641,-0.191342,-0.326641 0.426777,-0.191342,-0.176777 0.46194,-0.191342,0 0.384089,-0.277785,0.159095 0.415735,-0.277785,0 0.293969,-0.277785,0.293969 0.159095,-0.277785,0.384089 2.54556e-017,-0.277785,0.415735 -0.159095,-0.277785,0.384089 -0.293969,-0.277785,0.293969 -0.384089,-0.277785,0.159095 -0.415735,-0.277785,5.09111e-017 -0.384089,-0.277785,-0.159095 -0.293969,-0.277785,-0.293969 -0.159095,-0.277785,-0.384089 -7.63667e-017,-0.277785,-0.415735 0.159095,-0.277785,-0.384089 0.293969,-0.277785,-0.293969 0.384089,-0.277785,-0.159095 0.415735,-0.277785,0 0.326641,-0.353553,0.135299 0.353553,-0.353553,0 0.25,-0.353553,0.25 0.135299,-0.353553,0.326641 2.16482e-017,-0.353553,0.353553 -0.135299,-0.353553,0.326641 -0.25,-0.353553,0.25 -0.326641,-0.353553,0.135299 -0.353553,-0.353553,4.32964e-017 -0.326641,-0.353553,-0.135299 -0.25,-0.353553,-0.25 -0.135299,-0.353553,-0.326641 -6.49446e-017,-0.353553,-0.353553 0.135299,-0.353553,-0.326641 0.25,-0.353553,-0.25 0.326641,-0.353553,-0.135299 0.353553,-0.353553,0 0.25664,-0.415735,0.106304 0.277785,-0.415735,0 0.196424,-0.415735,0.196424 0.106304,-0.415735,0.25664 1.70089e-017,-0.415735,0.277785 -0.106304,-0.415735,0.25664 -0.196424,-0.415735,0.196424 -0.25664,-0.415735,0.106304 -0.277785,-0.415735,3.40177e-017 -0.25664,-0.415735,-0.106304 -0.196424,-0.415735,-0.196424 -0.106304,-0.415735,-0.25664 -5.10266e-017,-0.415735,-0.277785 0.106304,-0.415735,-0.25664 0.196424,-0.415735,-0.196424 0.25664,-0.415735,-0.106304 0.277785,-0.415735,0 0.176777,-0.46194,0.0732233 0.191342,-0.46194,0 0.135299,-0.46194,0.135299 0.0732233,-0.46194,0.176777 1.17159e-017,-0.46194,0.191342 -0.0732233,-0.46194,0.176777 -0.135299,-0.46194,0.135299 -0.176777,-0.46194,0.0732233 -0.191342,-0.46194,2.34318e-017 -0.176777,-0.46194,-0.0732233 -0.135299,-0.46194,-0.135299 -0.0732233,-0.46194,-0.176777 -3.51477e-017,-0.46194,-0.191342 0.0732233,-0.46194,-0.176777 0.135299,-0.46194,-0.135299 0.176777,-0.46194,-0.0732233 0.191342,-0.46194,0 0.09012,-0.490393,0.0373289 0.0975452,-0.490393,0 0.0689748,-0.490393,0.0689748 0.0373289,-0.490393,0.09012 5.97272e-018,-0.490393,0.0975452 -0.0373289,-0.490393,0.09012 -0.0689748,-0.490393,0.0689748 -0.09012,-0.490393,0.0373289 -0.0975452,-0.490393,1.19454e-017 -0.09012,-0.490393,-0.0373289 -0.0689748,-0.490393,-0.0689748 -0.0373289,-0.490393,-0.09012 -1.79182e-017,-0.490393,-0.0975452 0.0373289,-0.490393,-0.09012 0.0689748,-0.490393,-0.0689748 0.09012,-0.490393,-0.0373289 0.0975452,-0.490393,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 0,-0.5,0 " TextureCoordinates="0.928125,0.938125 0.99,0.938125 0.959063,0.99 0.86625,0.938125 0.897188,0.99 0.804375,0.938125 0.835312,0.99 0.7425,0.938125 0.773438,0.99 0.680625,0.938125 0.711563,0.99 0.61875,0.938125 0.649688,0.99 0.556875,0.938125 0.587812,0.99 0.495,0.938125 0.525937,0.99 0.433125,0.938125 0.464063,0.99 0.37125,0.938125 0.402187,0.99 0.309375,0.938125 0.340313,0.99 0.2475,0.938125 0.278437,0.99 0.185625,0.938125 0.216563,0.99 0.12375,0.938125 0.154687,0.99 0.061875,0.938125 0.0928125,0.99 0,0.938125 0.0309375,0.99 0.928125,0.86625 0.99,0.86625 0.99,0.928125 0.928125,0.928125 0.86625,0.86625 0.86625,0.928125 0.804375,0.86625 0.804375,0.928125 0.7425,0.86625 0.7425,0.928125 0.680625,0.86625 0.680625,0.928125 0.61875,0.86625 0.61875,0.928125 0.556875,0.86625 0.556875,0.928125 0.495,0.86625 0.495,0.928125 0.433125,0.86625 0.433125,0.928125 0.37125,0.86625 0.37125,0.928125 0.309375,0.86625 0.309375,0.928125 0.2475,0.86625 0.2475,0.928125 0.185625,0.86625 0.185625,0.928125 0.12375,0.86625 0.12375,0.928125 0.061875,0.86625 0.061875,0.928125 0,0.86625 0,0.928125 0.928125,0.804375 0.99,0.804375 0.86625,0.804375 0.804375,0.804375 0.7425,0.804375 0.680625,0.804375 0.61875,0.804375 0.556875,0.804375 0.495,0.804375 0.433125,0.804375 0.37125,0.804375 0.309375,0.804375 0.2475,0.804375 0.185625,0.804375 0.12375,0.804375 0.061875,0.804375 0,0.804375 0.928125,0.7425 0.99,0.7425 0.86625,0.7425 0.804375,0.7425 0.7425,0.7425 0.680625,0.7425 0.61875,0.7425 0.556875,0.7425 0.495,0.7425 0.433125,0.7425 0.37125,0.7425 0.309375,0.7425 0.2475,0.7425 0.185625,0.7425 0.12375,0.7425 0.061875,0.7425 0,0.7425 0.928125,0.680625 0.99,0.680625 0.86625,0.680625 0.804375,0.680625 0.7425,0.680625 0.680625,0.680625 0.61875,0.680625 0.556875,0.680625 0.495,0.680625 0.433125,0.680625 0.37125,0.680625 0.309375,0.680625 0.2475,0.680625 0.185625,0.680625 0.12375,0.680625 0.061875,0.680625 0,0.680625 0.928125,0.61875 0.99,0.61875 0.86625,0.61875 0.804375,0.61875 0.7425,0.61875 0.680625,0.61875 0.61875,0.61875 0.556875,0.61875 0.495,0.61875 0.433125,0.61875 0.37125,0.61875 0.309375,0.61875 0.2475,0.61875 0.185625,0.61875 0.12375,0.61875 0.061875,0.61875 0,0.61875 0.928125,0.556875 0.99,0.556875 0.86625,0.556875 0.804375,0.556875 0.7425,0.556875 0.680625,0.556875 0.61875,0.556875 0.556875,0.556875 0.495,0.556875 0.433125,0.556875 0.37125,0.556875 0.309375,0.556875 0.2475,0.556875 0.185625,0.556875 0.12375,0.556875 0.061875,0.556875 0,0.556875 0.928125,0.495 0.99,0.495 0.86625,0.495 0.804375,0.495 0.7425,0.495 0.680625,0.495 0.61875,0.495 0.556875,0.495 0.495,0.495 0.433125,0.495 0.37125,0.495 0.309375,0.495 0.2475,0.495 0.185625,0.495 0.12375,0.495 0.061875,0.495 0,0.495 0.928125,0.433125 0.99,0.433125 0.86625,0.433125 0.804375,0.433125 0.7425,0.433125 0.680625,0.433125 0.61875,0.433125 0.556875,0.433125 0.495,0.433125 0.433125,0.433125 0.37125,0.433125 0.309375,0.433125 0.2475,0.433125 0.185625,0.433125 0.12375,0.433125 0.061875,0.433125 0,0.433125 0.928125,0.37125 0.99,0.37125 0.86625,0.37125 0.804375,0.37125 0.7425,0.37125 0.680625,0.37125 0.61875,0.37125 0.556875,0.37125 0.495,0.37125 0.433125,0.37125 0.37125,0.37125 0.309375,0.37125 0.2475,0.37125 0.185625,0.37125 0.12375,0.37125 0.061875,0.37125 0,0.37125 0.928125,0.309375 0.99,0.309375 0.86625,0.309375 0.804375,0.309375 0.7425,0.309375 0.680625,0.309375 0.61875,0.309375 0.556875,0.309375 0.495,0.309375 0.433125,0.309375 0.37125,0.309375 0.309375,0.309375 0.2475,0.309375 0.185625,0.309375 0.12375,0.309375 0.061875,0.309375 0,0.309375 0.928125,0.2475 0.99,0.2475 0.86625,0.2475 0.804375,0.2475 0.7425,0.2475 0.680625,0.2475 0.61875,0.2475 0.556875,0.2475 0.495,0.2475 0.433125,0.2475 0.37125,0.2475 0.309375,0.2475 0.2475,0.2475 0.185625,0.2475 0.12375,0.2475 0.061875,0.2475 0,0.2475 0.928125,0.185625 0.99,0.185625 0.86625,0.185625 0.804375,0.185625 0.7425,0.185625 0.680625,0.185625 0.61875,0.185625 0.556875,0.185625 0.495,0.185625 0.433125,0.185625 0.37125,0.185625 0.309375,0.185625 0.2475,0.185625 0.185625,0.185625 0.12375,0.185625 0.061875,0.185625 0,0.185625 0.928125,0.12375 0.99,0.12375 0.86625,0.12375 0.804375,0.12375 0.7425,0.12375 0.680625,0.12375 0.61875,0.12375 0.556875,0.12375 0.495,0.12375 0.433125,0.12375 0.37125,0.12375 0.309375,0.12375 0.2475,0.12375 0.185625,0.12375 0.12375,0.12375 0.061875,0.12375 0,0.12375 0.928125,0.061875 0.99,0.061875 0.86625,0.061875 0.804375,0.061875 0.7425,0.061875 0.680625,0.061875 0.61875,0.061875 0.556875,0.061875 0.495,0.061875 0.433125,0.061875 0.37125,0.061875 0.309375,0.061875 0.2475,0.061875 0.185625,0.061875 0.12375,0.061875 0.061875,0.061875 0,0.061875 0.959063,0 0.897188,0 0.835312,0 0.773438,0 0.711563,0 0.649688,0 0.587812,0 0.525937,0 0.464063,0 0.402187,0 0.340313,0 0.278437,0 0.216563,0 0.154687,0 0.0928125,0 0.0309375,0 " TriangleIndices="0,1,2 3,0,4 5,3,6 7,5,8 9,7,10 11,9,12 13,11,14 15,13,16 17,15,18 19,17,20 21,19,22 23,21,24 25,23,26 27,25,28 29,27,30 31,29,32 33,34,35 35,36,33 37,33,36 36,38,37 39,37,38 38,40,39 41,39,40 40,42,41 43,41,42 42,44,43 45,43,44 44,46,45 47,45,46 46,48,47 49,47,48 48,50,49 51,49,50 50,52,51 53,51,52 52,54,53 55,53,54 54,56,55 57,55,56 56,58,57 59,57,58 58,60,59 61,59,60 60,62,61 63,61,62 62,64,63 65,63,64 64,66,65 67,68,34 34,33,67 69,67,33 33,37,69 70,69,37 37,39,70 71,70,39 39,41,71 72,71,41 41,43,72 73,72,43 43,45,73 74,73,45 45,47,74 75,74,47 47,49,75 76,75,49 49,51,76 77,76,51 51,53,77 78,77,53 53,55,78 79,78,55 55,57,79 80,79,57 57,59,80 81,80,59 59,61,81 82,81,61 61,63,82 83,82,63 63,65,83 84,85,68 68,67,84 86,84,67 67,69,86 87,86,69 69,70,87 88,87,70 70,71,88 89,88,71 71,72,89 90,89,72 72,73,90 91,90,73 73,74,91 92,91,74 74,75,92 93,92,75 75,76,93 94,93,76 76,77,94 95,94,77 77,78,95 96,95,78 78,79,96 97,96,79 79,80,97 98,97,80 80,81,98 99,98,81 81,82,99 100,99,82 82,83,100 101,102,85 85,84,101 103,101,84 84,86,103 104,103,86 86,87,104 105,104,87 87,88,105 106,105,88 88,89,106 107,106,89 89,90,107 108,107,90 90,91,108 109,108,91 91,92,109 110,109,92 92,93,110 111,110,93 93,94,111 112,111,94 94,95,112 113,112,95 95,96,113 114,113,96 96,97,114 115,114,97 97,98,115 116,115,98 98,99,116 117,116,99 99,100,117 118,119,102 102,101,118 120,118,101 101,103,120 121,120,103 103,104,121 122,121,104 104,105,122 123,122,105 105,106,123 124,123,106 106,107,124 125,124,107 107,108,125 126,125,108 108,109,126 127,126,109 109,110,127 128,127,110 110,111,128 129,128,111 111,112,129 130,129,112 112,113,130 131,130,113 113,114,131 132,131,114 114,115,132 133,132,115 115,116,133 134,133,116 116,117,134 135,136,119 119,118,135 137,135,118 118,120,137 138,137,120 120,121,138 139,138,121 121,122,139 140,139,122 122,123,140 141,140,123 123,124,141 142,141,124 124,125,142 143,142,125 125,126,143 144,143,126 126,127,144 145,144,127 127,128,145 146,145,128 128,129,146 147,146,129 129,130,147 148,147,130 130,131,148 149,148,131 131,132,149 150,149,132 132,133,150 151,150,133 133,134,151 152,153,136 136,135,152 154,152,135 135,137,154 155,154,137 137,138,155 156,155,138 138,139,156 157,156,139 139,140,157 158,157,140 140,141,158 159,158,141 141,142,159 160,159,142 142,143,160 161,160,143 143,144,161 162,161,144 144,145,162 163,162,145 145,146,163 164,163,146 146,147,164 165,164,147 147,148,165 166,165,148 148,149,166 167,166,149 149,150,167 168,167,150 150,151,168 169,170,153 153,152,169 171,169,152 152,154,171 172,171,154 154,155,172 173,172,155 155,156,173 174,173,156 156,157,174 175,174,157 157,158,175 176,175,158 158,159,176 177,176,159 159,160,177 178,177,160 160,161,178 179,178,161 161,162,179 180,179,162 162,163,180 181,180,163 163,164,181 182,181,164 164,165,182 183,182,165 165,166,183 184,183,166 166,167,184 185,184,167 167,168,185 186,187,170 170,169,186 188,186,169 169,171,188 189,188,171 171,172,189 190,189,172 172,173,190 191,190,173 173,174,191 192,191,174 174,175,192 193,192,175 175,176,193 194,193,176 176,177,194 195,194,177 177,178,195 196,195,178 178,179,196 197,196,179 179,180,197 198,197,180 180,181,198 199,198,181 181,182,199 200,199,182 182,183,200 201,200,183 183,184,201 202,201,184 184,185,202 203,204,187 187,186,203 205,203,186 186,188,205 206,205,188 188,189,206 207,206,189 189,190,207 208,207,190 190,191,208 209,208,191 191,192,209 210,209,192 192,193,210 211,210,193 193,194,211 212,211,194 194,195,212 213,212,195 195,196,213 214,213,196 196,197,214 215,214,197 197,198,215 216,215,198 198,199,216 217,216,199 199,200,217 218,217,200 200,201,218 219,218,201 201,202,219 220,221,204 204,203,220 222,220,203 203,205,222 223,222,205 205,206,223 224,223,206 206,207,224 225,224,207 207,208,225 226,225,208 208,209,226 227,226,209 209,210,227 228,227,210 210,211,228 229,228,211 211,212,229 230,229,212 212,213,230 231,230,213 213,214,231 232,231,214 214,215,232 233,232,215 215,216,233 234,233,216 216,217,234 235,234,217 217,218,235 236,235,218 218,219,236 237,238,221 221,220,237 239,237,220 220,222,239 240,239,222 222,223,240 241,240,223 223,224,241 242,241,224 224,225,242 243,242,225 225,226,243 244,243,226 226,227,244 245,244,227 227,228,245 246,245,228 228,229,246 247,246,229 229,230,247 248,247,230 230,231,248 249,248,231 231,232,249 250,249,232 232,233,250 251,250,233 233,234,251 252,251,234 234,235,252 253,252,235 235,236,253 254,255,238 238,237,254 256,254,237 237,239,256 257,256,239 239,240,257 258,257,240 240,241,258 259,258,241 241,242,259 260,259,242 242,243,260 261,260,243 243,244,261 262,261,244 244,245,262 263,262,245 245,246,263 264,263,246 246,247,264 265,264,247 247,248,265 266,265,248 248,249,266 267,266,249 249,250,267 268,267,250 250,251,268 269,268,251 251,252,269 270,269,252 252,253,270 271,272,255 255,254,271 273,271,254 254,256,273 274,273,256 256,257,274 275,274,257 257,258,275 276,275,258 258,259,276 277,276,259 259,260,277 278,277,260 260,261,278 279,278,261 261,262,279 280,279,262 262,263,280 281,280,263 263,264,281 282,281,264 264,265,282 283,282,265 265,266,283 284,283,266 266,267,284 285,284,267 267,268,285 286,285,268 268,269,286 287,286,269 269,270,287 288,272,271 289,271,273 290,273,274 291,274,275 292,275,276 293,276,277 294,277,278 295,278,279 296,279,280 297,280,281 298,281,282 299,282,283 300,283,284 301,284,285 302,285,286 303,286,287 " />

        <Transform3DGroup x:Key="CubeMeshTransform">
            <Transform3DGroup.Children>
                <ScaleTransform3D
                    ScaleX="10" ScaleY="10" ScaleZ="10" />
            </Transform3DGroup.Children>
        </Transform3DGroup>

        <Transform3DGroup x:Key="CubeMeshTransform2">
            <Transform3DGroup.Children>
                <ScaleTransform3D
                    ScaleX="12" ScaleY="12" ScaleZ="12" />
            </Transform3DGroup.Children>
        </Transform3DGroup>

        <RadialGradientBrush x:Key="GridBackground">
            <GradientBrush.GradientStops>
                <GradientStopCollection>
                    <GradientStop Offset="1" Color="sc#1, 0.1, 0, 0" />
                    <GradientStop Offset="0.5" Color="sc#1, 1, 0.1, 0" />
                    <GradientStop Offset="0" Color="sc#1, 1, 1, 0.1" />
                </GradientStopCollection>
            </GradientBrush.GradientStops>
        </RadialGradientBrush>
    </UserControl.Resources>

    <Grid Background="Black">
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="*" />
        </Grid.ColumnDefinitions>

        <Grid Grid.Column="1" Background="{StaticResource GridBackground}">
            <Viewport3D
                Name="myViewport3D" ClipToBounds="true" Focusable="true">
                <Viewport3D.Camera>
                    <PerspectiveCamera
                        FarPlaneDistance="20" FieldOfView="60" LookDirection="0,0,-1" NearPlaneDistance="0.25" Position="0,0,5"
                        UpDirection="0,1,0" />
                </Viewport3D.Camera>

                <ModelVisual3D>

                    <ModelVisual3D.Transform>
                        <Transform3DGroup>
                            <Transform3DGroup.Children>
                                <Transform3DCollection>

                                    <ScaleTransform3D
                                        ScaleX="1" ScaleY="1" ScaleZ="1" />
                                    <RotateTransform3D>
                                        <RotateTransform3D.Rotation>
                                            <AxisAngleRotation3D Angle="0" Axis="0 1 0" />
                                        </RotateTransform3D.Rotation>
                                    </RotateTransform3D>
                                    <TranslateTransform3D
                                        OffsetX="0" OffsetY="0" OffsetZ="0" />
                                </Transform3DCollection>
                            </Transform3DGroup.Children>
                        </Transform3DGroup>
                    </ModelVisual3D.Transform>

                    <ModelVisual3D.Content>

                        <Model3DGroup>
                            <Model3DGroup.Transform>
                                <Transform3DGroup>
                                    <Transform3DGroup.Children>
                                        <Transform3DCollection>

                                            <ScaleTransform3D
                                                ScaleX="0.7" ScaleY="0.7" ScaleZ="0.7" />
                                            <RotateTransform3D>
                                                <RotateTransform3D.Rotation>
                                                    <AxisAngleRotation3D Angle="0" Axis="0 1 0" />
                                                </RotateTransform3D.Rotation>
                                            </RotateTransform3D>
                                            <TranslateTransform3D
                                                OffsetX="0" OffsetY="0" OffsetZ="0" />
                                        </Transform3DCollection>
                                    </Transform3DGroup.Children>
                                </Transform3DGroup>
                            </Model3DGroup.Transform>

                            <Model3DGroup.Children>

                                <!--  Group Child 0  -->

                                <Model3DGroup>
                                    <Model3DGroup.Transform>
                                        <Transform3DGroup>
                                            <Transform3DGroup.Children>
                                                <Transform3DCollection>

                                                    <ScaleTransform3D
                                                        ScaleX="1" ScaleY="1" ScaleZ="1" />

                                                    <RotateTransform3D>
                                                        <RotateTransform3D.Rotation>
                                                            <AxisAngleRotation3D
                                                                x:Name="myRotate" Angle="0" Axis="0 1 0" />
                                                        </RotateTransform3D.Rotation>
                                                    </RotateTransform3D>

                                                    <TranslateTransform3D
                                                        OffsetX="0" OffsetY="0" OffsetZ="0" />
                                                </Transform3DCollection>
                                            </Transform3DGroup.Children>
                                        </Transform3DGroup>
                                    </Model3DGroup.Transform>

                                    <Model3DGroup.Children>

                                        <!--  Child 0  -->

                                        <GeometryModel3D Geometry="{StaticResource Sphere16x16}">

                                            <GeometryModel3D.Transform>
                                                <Transform3DGroup>
                                                    <Transform3DGroup.Children>
                                                        <ScaleTransform3D
                                                            ScaleX="10" ScaleY="10" ScaleZ="10" />
                                                        <RotateTransform3D>
                                                            <RotateTransform3D.Rotation>
                                                                <AxisAngleRotation3D
                                                                    x:Name="myRotateInner" Angle="0" Axis="1 0 0" />
                                                            </RotateTransform3D.Rotation>
                                                        </RotateTransform3D>
                                                    </Transform3DGroup.Children>
                                                </Transform3DGroup>
                                            </GeometryModel3D.Transform>

                                            <GeometryModel3D.Material>
                                                <MaterialGroup>
                                                    <MaterialGroup.Children>
                                                        <EmissiveMaterial>
                                                            <EmissiveMaterial.Brush>
                                                                <ImageBrush ImageSource="roundcornersheet.png">
                                                                    <ImageBrush.Transform>
                                                                        <TransformGroup>
                                                                            <TransformGroup.Children>
                                                                                <RotateTransform Angle="0" CenterX="0.5" CenterY="0.5" />
                                                                            </TransformGroup.Children>
                                                                        </TransformGroup>
                                                                    </ImageBrush.Transform>
                                                                </ImageBrush>
                                                            </EmissiveMaterial.Brush>
                                                        </EmissiveMaterial>
                                                    </MaterialGroup.Children>
                                                </MaterialGroup>
                                            </GeometryModel3D.Material>

                                            <GeometryModel3D.BackMaterial>
                                                <MaterialGroup>
                                                    <MaterialGroup.Children>
                                                        <EmissiveMaterial>
                                                            <EmissiveMaterial.Brush>
                                                                <ImageBrush ImageSource="roundcornersheet.png">
                                                                    <ImageBrush.Transform>
                                                                        <TransformGroup>
                                                                            <TransformGroup.Children>
                                                                                <RotateTransform Angle="0" CenterX="0.5" CenterY="0.5" />
                                                                            </TransformGroup.Children>
                                                                        </TransformGroup>
                                                                    </ImageBrush.Transform>
                                                                </ImageBrush>
                                                            </EmissiveMaterial.Brush>
                                                        </EmissiveMaterial>
                                                    </MaterialGroup.Children>
                                                </MaterialGroup>
                                            </GeometryModel3D.BackMaterial>
                                        </GeometryModel3D>

                                        <GeometryModel3D Geometry="{StaticResource Sphere16x16}">

                                            <GeometryModel3D.Transform>
                                                <Transform3DGroup>
                                                    <Transform3DGroup.Children>
                                                        <ScaleTransform3D
                                                            ScaleX="11" ScaleY="11" ScaleZ="11" />
                                                        <RotateTransform3D>
                                                            <RotateTransform3D.Rotation>
                                                                <AxisAngleRotation3D
                                                                    x:Name="myRotateOuter" Angle="0" Axis="0 1 0" />
                                                            </RotateTransform3D.Rotation>
                                                        </RotateTransform3D>
                                                    </Transform3DGroup.Children>
                                                </Transform3DGroup>
                                            </GeometryModel3D.Transform>

                                            <GeometryModel3D.Material>
                                                <MaterialGroup>
                                                    <MaterialGroup.Children>
                                                        <EmissiveMaterial>
                                                            <EmissiveMaterial.Brush>
                                                                <ImageBrush ImageSource="roundcornersheet.png">
                                                                    <ImageBrush.Transform>
                                                                        <TransformGroup>
                                                                            <TransformGroup.Children>
                                                                                <RotateTransform Angle="0" CenterX="0.5" CenterY="0.5" />
                                                                            </TransformGroup.Children>
                                                                        </TransformGroup>
                                                                    </ImageBrush.Transform>
                                                                </ImageBrush>
                                                            </EmissiveMaterial.Brush>
                                                        </EmissiveMaterial>
                                                    </MaterialGroup.Children>
                                                </MaterialGroup>
                                            </GeometryModel3D.Material>

                                            <GeometryModel3D.BackMaterial>
                                                <MaterialGroup>
                                                    <MaterialGroup.Children>
                                                        <EmissiveMaterial>
                                                            <EmissiveMaterial.Brush>
                                                                <ImageBrush ImageSource="roundcornersheet.png">
                                                                    <ImageBrush.Transform>
                                                                        <TransformGroup>
                                                                            <TransformGroup.Children>
                                                                                <RotateTransform Angle="0" CenterX="0.5" CenterY="0.5" />
                                                                            </TransformGroup.Children>
                                                                        </TransformGroup>
                                                                    </ImageBrush.Transform>
                                                                </ImageBrush>
                                                            </EmissiveMaterial.Brush>
                                                        </EmissiveMaterial>
                                                    </MaterialGroup.Children>
                                                </MaterialGroup>
                                            </GeometryModel3D.BackMaterial>
                                        </GeometryModel3D>
                                    </Model3DGroup.Children>
                                </Model3DGroup>

                                <Model3DGroup>
                                    <Model3DGroup.Children>

                                        <AmbientLight Color="#ffffffff" />
                                        <!--
										<DirectionalLight Color="LightGray" Direction="-1,-1,-1" />
										-->
                                    </Model3DGroup.Children>
                                </Model3DGroup>
                            </Model3DGroup.Children>
                        </Model3DGroup>
                    </ModelVisual3D.Content>
                </ModelVisual3D>
            </Viewport3D>
        </Grid>
    </Grid>
</UserControl>
----------------------------------------------------------------------------------------------------------------
using EASYTools.ImageEffectLibrary;
using System.Windows.Controls;
using System.Windows.Media.Animation;

namespace GoldenSystem.Pages {

    public partial class ScreenSaverPage : UserControl {
        private Trackball _trackball;

        public ScreenSaverPage() {
            InitializeComponent();

            _trackball = new Trackball();
            _trackball.Attach(this);
            _trackball.Slaves.Add(myViewport3D);
            _trackball.Enabled = true;

            var s = (Storyboard)FindResource("RotateStoryboard");
            BeginStoryboard(s);
        }
    }
}

        private void BtnBrowse_Click(object sender, RoutedEventArgs e) {
            try
            {
                OpenFileDialog dlg = new OpenFileDialog
                { DefaultExt = ".exe", Filter = "Exe files |*.exe", Title = Resources["fileOpenDescription"].ToString() };
                if (dlg.ShowDialog() == true) { txt_powerBuilderPath.Text = dlg.FileName; }
            }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }
    }
}
```    
			
---   
			### XAML Vlastní Formulář     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.TemplateSettingsPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    d:DesignHeight="500"
    d:DesignWidth="600"
    Tag="Setting"
    mc:Ignorable="d">
    <UserControl.Resources>
        <Thickness x:Key="ControlMargin">0 5 0 0</Thickness>
        <Style
            x:Key="NormalCaseColumnHeader"
            BasedOn="{StaticResource MetroDataGridColumnHeader}"
            TargetType="{x:Type DataGridColumnHeader}">
            <Setter Property="Controls:ControlsHelper.ContentCharacterCasing" Value="Normal" />
        </Style>
    </UserControl.Resources>

    <Grid Name="configuration">
        <Grid
            Width="Auto"
            Height="Auto"
            Margin="0,0,0,0"
            HorizontalAlignment="Stretch"
            VerticalAlignment="Stretch"
            ForceCursor="False"
            ShowGridLines="False">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="300" />
                <ColumnDefinition Width="*" />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
                <RowDefinition />
                <RowDefinition Height="110" />
            </Grid.RowDefinitions>

            <Label
                x:Name="lbl_apiAddress"
                Grid.Row="0"
                Grid.Column="0"
                HorizontalAlignment="Right"
                HorizontalContentAlignment="Right" />
            <TextBox
                x:Name="txt_apiAddress"
                Grid.Row="0"
                Grid.Column="1"
                Margin="0,2,160,2"
                Controls:TextBoxHelper.ClearTextButton="true"
                Controls:TextBoxHelper.IsWaitingForData="True"
                TextChanged="ApiAddress_TextChanged"
                ToolTip="Default is http://127.0.0.1:5000" />

            <Button
                x:Name="btnApiTest"
                Grid.Row="0"
                Grid.Column="1"
                Width="150"
                Height="25"
                Margin="0,2,5,0"
                Padding="5,4,5,5"
                HorizontalAlignment="Right"
                VerticalAlignment="Top"
                
                Click="BtnApiTest_Click"
                IsEnabled="False"
                Style="{DynamicResource AccentedSquareButtonStyle}">
                <Button.ToolTip>
                    <TextBlock>
                        Test API connection<LineBreak /></TextBlock>
                </Button.ToolTip>
            </Button>

            <Label
                x:Name="lbl_serviceName"
                Grid.Row="1"
                Grid.Column="0"
                HorizontalAlignment="Right"
                HorizontalContentAlignment="Right" />
            <TextBox
                x:Name="txt_serviceName"
                Grid.Row="1"
                Grid.Column="1"
                Margin="0,2,0,2"
                Controls:TextBoxHelper.ClearTextButton="true"
                Controls:TextBoxHelper.IsWaitingForData="True"
                Controls:TextBoxHelper.Watermark=""
                ToolTip="Service name from windows processes" />

            <Label
                x:Name="lbl_writeToLog"
                Grid.Row="2"
                Grid.Column="0"
                HorizontalAlignment="Right"
                HorizontalContentAlignment="Right" />
            <CheckBox
                x:Name="chb_WritetoLog"
                Grid.Row="2"
                Grid.Column="1"
                VerticalAlignment="Center" />

            <Label
                x:Name="lbl_serverCheckIntervalSec"
                Grid.Row="3"
                Grid.Column="0"
                HorizontalAlignment="Right"
                HorizontalContentAlignment="Right" />
            <Controls:NumericUpDown
                x:Name="txt_serverCheckIntervalSec"
                Grid.Row="3"
                Grid.Column="1"
                Margin="0,2,0,2"
                HorizontalContentAlignment="Left"
                Controls:TextBoxHelper.ClearTextButton="true"
                Controls:TextBoxHelper.Watermark=""
                Maximum="99"
                Minimum="1" />

            <Label
                x:Name="lbl_topMost"
                Grid.Row="4"
                Grid.Column="0"
                HorizontalAlignment="Right"
                HorizontalContentAlignment="Right" />
            <CheckBox
                x:Name="chb_topMost"
                Grid.Row="4"
                Grid.Column="1"
                VerticalAlignment="Center" />

            <Label
                x:Name="lbl_activeNewInputDefault"
                Grid.Row="5"
                Grid.Column="0"
                HorizontalAlignment="Right"
                HorizontalContentAlignment="Right" />
            <CheckBox
                x:Name="chb_activeNewInputDefault"
                Grid.Row="5"
                Grid.Column="1"
                VerticalAlignment="Center" />

            <Label
                x:Name="lbl_defaultLanguage"
                Grid.Row="6"
                Grid.Column="0"
                HorizontalAlignment="Right"
                HorizontalContentAlignment="Right" />
            <ComboBox
                Name="cb_defaultLanguage"
                Grid.Row="6"
                Grid.Column="1"
                Margin="0,2,0,2"
                HorizontalAlignment="Stretch"
                VerticalAlignment="Center"
                Controls:TextBoxHelper.ClearTextButton="false"
                DisplayMemberPath="Name"
                IsEnabled="true"
                ItemsSource="{Binding Path=Languages}"
                SelectedValuePath="Value" />

            <Label
                x:Name="lbl_showVerticalPanel"
                Grid.Row="7"
                Grid.Column="0"
                HorizontalAlignment="Right"
                HorizontalContentAlignment="Right" />
            <CheckBox
                x:Name="chb_showVerticalPanel"
                Grid.Row="7"
                Grid.Column="1"
                VerticalAlignment="Center" />

            <Label
                x:Name="lbl_powerBuilderPath"
                Grid.Row="8"
                Grid.Column="0"
                Width="140"
                HorizontalAlignment="Right"
                HorizontalContentAlignment="Right" />
            <TextBox
                x:Name="txt_powerBuilderPath"
                Grid.Row="8"
                Grid.Column="1"
                Margin="0,2,85,0"
                Controls:TextBoxHelper.SelectAllOnFocus="True"
                Controls:TextBoxHelper.Watermark="Enter path with PowerBuilder installed exe file"
                IsEnabled="False" />
            <Button
                x:Name="btn_browse"
                Grid.Row="8"
                Grid.Column="1"
                Width="80"
                Height="25"
                Margin="0,2,0,0"
                HorizontalAlignment="Right"
                VerticalAlignment="Top"
                
                Click="BtnBrowse_Click"
                Content="Browse"
                Style="{DynamicResource AccentedSquareButtonStyle}">
                <Button.ToolTip>
                    <TextBlock>Select the PowerBuilder installed exe file</TextBlock>
                </Button.ToolTip>
            </Button>

            <Button
                x:Name="btn_save"
                Grid.Row="10"
                Grid.Column="0"
                Width="200"
                Height="40"
                Margin="44,21,0,44"
                HorizontalAlignment="Left"
                VerticalAlignment="Bottom"
                
                Click="BtnSave_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />
            <Button
                x:Name="btn_restart"
                Grid.Row="10"
                Grid.Column="1"
                Width="200"
                Height="40"
                Margin="44,21,44,44"
                HorizontalAlignment="Right"
                VerticalAlignment="Bottom"
                Click="BtnRestart_Click"
                Style="{DynamicResource AccentedSquareButtonStyle}" />
        </Grid>
    </Grid>
</UserControl>
----------------------------------------------------------------------------------------------------------------

using GoldenSystem.Api;
using GoldenSystem.Classes;
using GoldenSystem.GlobalOperations;
using Microsoft.Win32;
using Newtonsoft.Json;
using Org.BouncyCastle.Asn1;
using System;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net.Http;
using System.Windows;
using System.Windows.Controls;

// This is Template Is Customized For Load and Save data without List (Settings) is folded from standartized Methods
namespace GoldenSystem.Pages {

    public partial class TemplateSettingsPage : UserControl {

        /// <summary>
        /// Standartized declaring static page data for global vorking with pages
        /// </summary>
        public static DataViewSupport dataViewSupport = new DataViewSupport();

        public static TemplateClassList selectedRecord = new TemplateClassList();

        /// <summary>
        /// Define Collection For Combobox
        /// </summary>
        public ObservableCollection<Language> Languages = new ObservableCollection<Language>() {
                                                                new Language() { Name = "System", Value = "system" },
                                                                new Language() { Name = "Czech", Value = "cs-CZ" },
                                                                new Language() { Name = "English", Value = "en-US" }
                                                             };

        /// <summary>
        /// Initialize page with loading Dictionary and start loding data
        /// Manual work needed Translate All XAML fields by Resources
        /// Runned on start
        ///
        /// </summary>
        public TemplateSettingsPage() {
            InitializeComponent();
            Language defaultLanguage = JsonConvert.DeserializeObject<Language>(App.Setting.DefaultLanguage);
            _ = SystemOperations.SetLanguageDictionary(Resources, defaultLanguage.Value);
            try
            {
                lbl_apiAddress.Content = Resources["apiAddress"].ToString();
                lbl_serviceName.Content = Resources["serviceName"].ToString();
                lbl_writeToLog.Content = Resources["logging"].ToString();
                lbl_serverCheckIntervalSec.Content = Resources["serverCheckIntervalSec"].ToString();
                lbl_topMost.Content = Resources["topMost"].ToString();
                lbl_activeNewInputDefault.Content = Resources["activeNewInputDefault"].ToString();
                lbl_defaultLanguage.Content = Resources["defaultLanguage"].ToString();
                lbl_showVerticalPanel.Content = Resources["showVerticalPanel"].ToString();
                lbl_powerBuilderPath.Content = Resources["powerBuilderPath"].ToString();

                btn_browse.Content = Resources["browse"].ToString();
                btn_restart.Content = Resources["restart"].ToString();
                btn_save.Content = Resources["btn_save"].ToString();
                btnApiTest.Content = Resources["apiConnectionTest"].ToString();
            }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            //data
            txt_apiAddress.Text = App.Setting.ApiAddress;
            chb_WritetoLog.IsChecked = App.Setting.WriteToLog;
            txt_serverCheckIntervalSec.Value = App.Setting.ServerCheckIntervalSec * 0.001;
            chb_topMost.IsChecked = App.Setting.TopMost;
            chb_activeNewInputDefault.IsChecked = App.Setting.ActiveNewInputDefault;
            txt_powerBuilderPath.Text = App.Setting.ReportingPath;

            cb_defaultLanguage.ItemsSource = Languages;

            int index = 0;
            cb_defaultLanguage.Items.SourceCollection.Cast<Language>().ToList().ForEach(language => { if (language.Name == defaultLanguage.Name) { cb_defaultLanguage.SelectedIndex = index; } index++; });
        }

        /// <summary>
        /// Customized GET Call
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private async void BtnApiTest_Click(object sender, RoutedEventArgs e) {
            using (HttpClient httpClient = new HttpClient())
            {
                try
                {
                    string json = await httpClient.GetStringAsync(txt_apiAddress.Text + "/" + ApiUrls.GoldenSystemBackendCheck + "/Db");
                    await MainWindow.ShowMessageOnMainWindow(false, json);
                }
                catch (Exception ex) { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + ex.StackTrace); }
            }
        }

        #region helper methods

        private class ExtensionsItem {

            public ExtensionsItem() {
                ident = null;
                isTrue = false;
                asn1OctetString = null;
            }

            public DerObjectIdentifier ident { get; set; }
            public bool isTrue { get; set; }
            public Asn1OctetString asn1OctetString { get; set; }
        }

        #endregion helper methods

        /// <summary>
        /// Standartized method for Direct Save Record
        /// Manual work needed, set correct data set for SubRecord
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RoutedEventArgs"/> instance containing the event data.</param>
        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            App.Setting.ApiAddress = txt_apiAddress.Text;
            App.Setting.WriteToLog = (bool)chb_WritetoLog.IsChecked;
            App.Setting.ServerCheckIntervalSec = (double)txt_serverCheckIntervalSec.Value * 1000;
            App.Setting.TopMost = (bool)chb_topMost.IsChecked;
            App.Setting.ActiveNewInputDefault = (bool)chb_activeNewInputDefault.IsChecked;
            App.Setting.DefaultLanguage = JsonConvert.SerializeObject((Language)cb_defaultLanguage.SelectedItem);
            App.Setting.ThemeName = App.Setting.ThemeName;
            App.Setting.AccentName = App.Setting.AccentName;
            App.Setting.ReportingPath = txt_powerBuilderPath.Text;

            if (FileOperations.SaveSettings()) { await MainWindow.ShowMessageOnMainWindow(false, Resources["savingSuccessfull"].ToString()); }
        }

        private void ApiAddress_TextChanged(object sender, TextChangedEventArgs e) => btnApiTest.IsEnabled = txt_apiAddress.Text.Length > 0;

        private void BtnRestart_Click(object sender, RoutedEventArgs e) => App.AppRestart();

        private void BtnBrowse_Click(object sender, RoutedEventArgs e) {
            try
            {
                OpenFileDialog dlg = new OpenFileDialog
                { DefaultExt = ".exe", Filter = "Exe files |*.exe", Title = Resources["fileOpenDescription"].ToString() };
                if (dlg.ShowDialog() == true) { txt_powerBuilderPath.Text = dlg.FileName; }
            }
            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }
    }
}
```    
			
---   
			### XAML Weby, Internet, Portály     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.TemplateWebViewPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:behaviors="clr-namespace:GoldenSystem.Pages"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:dragablz="clr-namespace:Dragablz;assembly=Dragablz"
    xmlns:globalization="clr-namespace:System.Globalization;assembly=mscorlib"
    xmlns:i="http://schemas.microsoft.com/expression/2010/interactivity"
    xmlns:iconPacks="http://metro.mahapps.com/winfx/xaml/iconpacks"
    xmlns:local="clr-namespace:GoldenSystem"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:sys="clr-namespace:System;assembly=mscorlib"
    xmlns:wpf="clr-namespace:CefSharp.Wpf;assembly=CefSharp.Wpf"
    xmlns:xctk="http://schemas.xceed.com/wpf/xaml/toolkit"
    Name="Setting"
    HorizontalAlignment="Stretch"
    VerticalAlignment="Stretch"
    d:DesignHeight="500"
    d:DesignWidth="600"
    Tag="Setting"
    mc:Ignorable="d">

    <!--  Standartized Full Page Grid  -->
    <Grid
        Margin="0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch"
        Background="{DynamicResource AccentColorBrush}">

        <Grid x:Name="ListView" Visibility="Visible">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="*" />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="*" />
            </Grid.RowDefinitions>

            <wpf:ChromiumWebBrowser
                x:Name="webViewer" Grid.Row="0" Grid.Column="0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch"
                IsEnabled="True" />
        </Grid>

    </Grid>
</UserControl>
----------------------------------------------------------------------------------------------------------------

using CefSharp;
using GoldenSystem.Classes;
using GoldenSystem.GlobalOperations;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Windows.Controls;

namespace GoldenSystem.Pages {

    /// <summary>
    /// Template Page For internet pages document, pictures, text and and much more file formats opened in WebViewer
    /// </summary>
    public partial class TemplateWebViewPage : UserControl {

        /// <summary>
        /// Standartized declaring static page data for global vorking with pages
        /// </summary>
        public static DataViewSupport dataViewSupport = new DataViewSupport();

        public static TemplateClassList selectedRecord = new TemplateClassList();

        /// <summary>
        /// Initialize page with loading Dictionary and direct show example file
        /// </summary>
        public TemplateWebViewPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, JsonConvert.DeserializeObject<Language>(App.Setting.DefaultLanguage).Value);

            try {
                webViewer.BeginInit();
                webViewer.Address = Path.Combine("http://localhost:8000/");
                webViewer.FrameLoadStart += WebViewer_FrameLoadStart;
                webViewer.FrameLoadEnd += WebViewer_FrameLoadEnd;
                webViewer.LifeSpanHandler = new MyCustomLifeSpanHandler();
            } catch (Exception ex) { }
        }

        private void WebViewer_FrameLoadStart(object sender, FrameLoadStartEventArgs e) {
            MainWindow.ProgressRing = System.Windows.Visibility.Visible;
        }

        private void WebViewer_FrameLoadEnd(object sender, FrameLoadEndEventArgs e) {
            MainWindow.ProgressRing = System.Windows.Visibility.Hidden;
        }

        private class MyCustomLifeSpanHandler : ILifeSpanHandler {

            public bool DoClose(IWebBrowser chromiumWebBrowser, IBrowser browser) {
                return true;
            }

            public void OnAfterCreated(IWebBrowser chromiumWebBrowser, IBrowser browser) {
            }

            public void OnBeforeClose(IWebBrowser chromiumWebBrowser, IBrowser browser) {
            }

            /// <summary>
            /// Block open New Solo Window Frame as popup
            /// </summary>
            /// <param name="chromiumWebBrowser"></param>
            /// <param name="browser"></param>
            /// <param name="frame"></param>
            /// <param name="targetUrl"></param>
            /// <param name="targetFrameName"></param>
            /// <param name="targetDisposition"></param>
            /// <param name="userGesture"></param>
            /// <param name="popupFeatures"></param>
            /// <param name="windowInfo"></param>
            /// <param name="browserSettings"></param>
            /// <param name="noJavascriptAccess"></param>
            /// <param name="newBrowser"></param>
            /// <returns></returns>
            public bool OnBeforePopup(IWebBrowser chromiumWebBrowser, IBrowser browser, IFrame frame, string targetUrl, string targetFrameName, WindowOpenDisposition targetDisposition, bool userGesture, IPopupFeatures popupFeatures, IWindowInfo windowInfo, IBrowserSettings browserSettings, ref bool noJavascriptAccess, out IWebBrowser newBrowser) {
                browser.MainFrame.LoadUrl(targetUrl);
                newBrowser = null;
                return true;
            }
        }
    }
}
```    
			
---   
			### XAML Zobrazení 3D,STL,atd     
			
```xml   
			<UserControl
    x:Class="GoldenSystem.Pages.TemplateSTLPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="http://metro.mahapps.com/winfx/xaml/controls"
    xmlns:HelixToolkit="clr-namespace:HelixToolkit.Wpf;assembly=HelixToolkit.Wpf"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    Width="Auto"
    Height="Auto"
    d:DesignHeight="500"
    d:DesignWidth="600"
    Tag="Setting"
    mc:Ignorable="d">
    <UserControl.Resources>
        <Thickness x:Key="ControlMargin">0 5 0 0</Thickness>
        <Style
            x:Key="NormalCaseColumnHeader"
            BasedOn="{StaticResource MetroDataGridColumnHeader}"
            TargetType="{x:Type DataGridColumnHeader}">
            <Setter Property="Controls:ControlsHelper.ContentCharacterCasing" Value="Normal" />
        </Style>
    </UserControl.Resources>

    <Grid Name="configuration">
        <Grid
            Width="Auto" Height="Auto" Margin="0,0,0,0" HorizontalAlignment="Stretch" VerticalAlignment="Stretch"
            ForceCursor="False" ShowGridLines="False">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="300" />
                <ColumnDefinition Width="*" />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="Auto" />
                <RowDefinition Height="Auto" />
            </Grid.RowDefinitions>

            <HelixToolkit:HelixViewport3D
                x:Name="viewPort3d" Grid.Row="0" Grid.RowSpan="2" Grid.ColumnSpan="2" Margin="0"
                HorizontalContentAlignment="Stretch" Background="Gray" CameraRotationMode="Trackball" IsHeadLightEnabled="True" IsMoveEnabled="True"
                IsTopBottomViewOrientedToFrontBack="False" IsViewCubeEdgeClicksEnabled="True" RotateAroundMouseDownPoint="False" ShowCameraInfo="True" ShowFrameRate="True"
                ShowViewCube="True" ViewCubeHeight="700" ViewCubeVerticalPosition="Top" ViewCubeWidth="150" ZoomAroundMouseDownPoint="True"
                ZoomExtentsWhenLoaded="True">

                <HelixToolkit:HelixViewport3D.Camera>
                    <PerspectiveCamera
                        FarPlaneDistance="1000" FieldOfView="57" LookDirection="0,-330,0" NearPlaneDistance="0.01" Position="0,330,60"
                        UpDirection="0,0,1" />
                </HelixToolkit:HelixViewport3D.Camera>
                <HelixToolkit:SunLight />
            </HelixToolkit:HelixViewport3D>
        </Grid>
    </Grid>
</UserControl>

----------------------------------------------------------------------------------------------------------------

using GoldenSystem.Classes;
using GoldenSystem.GlobalOperations;
using HelixToolkit.Wpf;
using Newtonsoft.Json;
using Org.BouncyCastle.Asn1;
using System;
using System.IO;
using System.Threading.Tasks;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media.Media3D;

// This is Template Is Customized For Show 3D STL Object
namespace GoldenSystem.Pages {

    public partial class TemplateSTLPage : UserControl {

        /// <summary>
        /// Standartized declaring static page data for global vorking with pages
        /// </summary>
        public static DataViewSupport dataViewSupport = new DataViewSupport();

        public static TemplateClassList selectedRecord = new TemplateClassList();

        public TemplateSTLPage() {
            InitializeComponent();
            Language defaultLanguage = JsonConvert.DeserializeObject<Language>(App.Setting.DefaultLanguage);
            _ = SystemOperations.SetLanguageDictionary(Resources, defaultLanguage.Value);

            ModelVisual3D device3D = new ModelVisual3D();
            device3D.Content = Display3d(Path.Combine(App.startupPath, "Data", "Track.stl")).GetAwaiter().GetResult();
            viewPort3d.Children.Add(device3D);
        }

        private async Task<Model3D> Display3d(string model) {
            Model3D device = null;
            try
            {
                viewPort3d.RotateGesture = new MouseGesture(MouseAction.LeftClick);
                ModelImporter import = new ModelImporter();
                device = import.Load(model);
            }
            catch (Exception ex) { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + ex.Message + Environment.NewLine + ex.StackTrace); }
            return device;
        }

        #region helper methods

        private class ExtensionsItem {

            public ExtensionsItem() {
                ident = null;
                isTrue = false;
                asn1OctetString = null;
            }

            public DerObjectIdentifier ident { get; set; }
            public bool isTrue { get; set; }
            public Asn1OctetString asn1OctetString { get; set; }
        }

        #endregion helper methods
    }
}
```    
			
---   
			